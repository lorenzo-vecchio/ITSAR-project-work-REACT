import mapboxgl from '!mapbox-gl';
import React, { useEffect, useState, useRef } from "react";
import PlaceWidget from './PlaceWidget';
import "../css/DropDownFiltri.css";

const MapWidget = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [displayDetInfo, setDisplayDetInfo] = useState(false);
  const [detInfoId, setDetInfoId] = useState();
  const [postoSelezionato, setPostoSelezionato] = useState();
  const [localizzazioneAttivata, setLocalizzazioneAttivata] = useState(false);
  const [posti, setPosti] = useState();
  const [markers, setMarkers] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("none");
  const mapContainerRef = useRef(null); // Ref to hold the map container element
  const mapRef = useRef(null); // Ref to hold the map object

  useEffect(() => {
    if (props.width === '100vw') {
      setIsFullScreen(true)
    }
  }, [props.width])

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9yZW56by12ZWNjaGlvIiwiYSI6ImNsaTNhb2hmMjB6OXIzcG80c3JpdXd3OWUifQ.6rCrnnxEwWoyKx7PLYqt6Q";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [12.496366, 41.902782], // long - lat
      zoom: 4
    });

    const nav = new mapboxgl.NavigationControl();
    mapRef.current.addControl(nav, "bottom-right");

    const geoLocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });
    mapRef.current.addControl(geoLocateControl, "bottom-right");

    geoLocateControl.on('geolocate', function(event) {
      setLocalizzazioneAttivata(true);
    });

    const requestOptions = {
      credentials: "include"
    };

    fetch("https://itsar-project-work-api.vercel.app/servizi", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setPosti(result);
        },
        (error) => {
          console.log('sta un errore man')
        }
      );
  }, []);

  useEffect(() => {
    if (posti && mapRef.current) {
      const filteredPosti = posti.filter((luogo) => {
        return filtroCategoria === "none" || luogo.tipo === filtroCategoria;
      });

      eliminaMarkers(); // Remove existing markers before adding new ones

      const newMarkers = filteredPosti.map((luogo) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([luogo.longitudine, luogo.latitudine])
          .addTo(mapRef.current);

        marker.getElement().addEventListener('click', () => {
          markerClickHandler(luogo);
        });

        return marker;
      });

      setMarkers(newMarkers);
    }
    getCategoryList();
  }, [posti, filtroCategoria]);

  function markerClickHandler(luogo) {
    if (isFullScreen) {
      setDisplayDetInfo(true)
    }
    setPostoSelezionato(luogo)
    const targetCoordinates = [luogo.longitudine, luogo.latitudine];
    const options = {
      center: targetCoordinates,
      zoom: 15,
      bearing: 0,
      pitch: 0
    };
    mapRef.current.flyTo(options);
  }

  function detailCloseClickHandler() {
    setDisplayDetInfo(false)
  }

  function eliminaMarkers() {
    markers.forEach((marker) => marker.remove());
  }

  function getCategoryList() {
    if (posti) {
      const categories = new Set();
      for (let i = 0; i < posti.length; i++) {
        const place = posti[i];
        categories.add(place.tipo);
      }
      setCategorie(Array.from(categories))
    }
  }

  function handleFiltroChange(event) {
    setFiltroCategoria(event.target.value);
  }

  return (
    <div>
      <div ref={mapContainerRef} id="map" style={{width: props.width, height: props.height, borderRadius: props.borderRadius}}></div>
      {displayDetInfo ? (
        <PlaceWidget 
          onClose={detailCloseClickHandler}
          posto={postoSelezionato}
        />
      ) : null}
      {
        isFullScreen ?
        <div style={styles.filtri}>
        <p>Filtri:</p>
        <select name="filtro" id="filtro" value={filtroCategoria} onChange={handleFiltroChange} style={styles.select}>
          <option value="none" className='dropdown'>Categoria</option>
          {
            categorie.map((categoria) => {
              return (
                <option key={categoria} value={categoria}>{categoria}</option>
              )
            })
          }
        </select>
        </div>
        : null
      }
      
    </div>
  );
};

const styles = {
  filtri: {
    position: 'fixed',
    top: '2rem',
    left: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: "white",
    backgroundColor: "rgb(0, 0, 0, 0.75)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    padding: '0px 20px',
    borderRadius: '40px'
  },
  select: {
    height: '1.5rem',
    backgroundColor: "#00000086",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "#fff",
  },

  option: {
    backgroundColor: "#00000086",
  }
};

export default MapWidget;
