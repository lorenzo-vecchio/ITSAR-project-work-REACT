import mapboxgl from '!mapbox-gl';
import React, { useEffect, useState, useRef } from "react";
import PlaceWidget from './PlaceWidget';

const MapWidget = (props) => {
  const [displayDetInfo, setDisplayDetInfo] = useState(false);
  const [detInfoId, setDetInfoId] = useState();
  const [postoSelezionato, setPostoSelezionato] = useState();
  const [localizzazioneAttivata, setLocalizzazioneAttivata] = useState(false);
  const [posti, setPosti] = useState();
  const [markers, setMarkers] = useState([]);
  const mapContainerRef = useRef(null); // Ref to hold the map container element
  const mapRef = useRef(null); // Ref to hold the map object

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
      const newMarkers = posti.map((luogo) => {
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
  }, [posti]);

  function markerClickHandler(luogo) {
    setDisplayDetInfo(true)
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
    for (let i = markers.length - 1; i >= 0; i--) {
      markers[i].remove();
    }
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
      <button style={styles.button} onClick={eliminaMarkers}>elimina markers</button>
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed',
    top: '1rem'
  }
};

export default MapWidget;
