import mapboxgl from '!mapbox-gl';
import React, { useEffect, useState } from "react";
import PlaceWidget from './PlaceWidget';

const MapWidget = (props) => {
  const [displayDetInfo, setDisplayDetInfo] = useState(false);
  const [detInfoId, setDetInfoId] = useState();
  const [postoSelezionato, setPostoSelezionato] = useState()
  let luoghi;
  let map;
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9yZW56by12ZWNjaGlvIiwiYSI6ImNsaTNhb2hmMjB6OXIzcG80c3JpdXd3OWUifQ.6rCrnnxEwWoyKx7PLYqt6Q";
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [12.496366, 41.902782], // long - lat
      zoom: 4
    });
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "bottom-right");
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      }),
      "bottom-right"
    );

    const requestOptions = {
      credentials: "include"
    }
    fetch("https://itsar-project-work-api.vercel.app/servizi", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          luoghi = result;
          luoghi.forEach((luogo) => {
            console.log(luogo)
            const marker = new mapboxgl.Marker()
            .setLngLat([luogo.longitudine, luogo.latitudine])
            .addTo(map);

            marker.getElement().addEventListener('click', () => {
              markerClickHandler(luogo);
            });
          });         
        },
        (error) => {
          console.log('sta un errore man')
        }
      )
  }, []);


  function markerClickHandler(luogo) {
    setDisplayDetInfo(true)
    setPostoSelezionato(luogo)
    // for mapbox to center on selected point
    var targetCoordinates = [luogo.longitudine, luogo.latitudine];
    var options = {
      center: targetCoordinates,
      zoom: 15,
      bearing: 0,
      pitch: 0
    };
    map.flyTo(options);
  }
  function detailCloseClickHandler() {
    setDisplayDetInfo(false)
  }


  return (
    <div>
      <div id="map" style={{width: props.width, height: props.height, borderRadius: props.borderRadius}}></div>
      {
        displayDetInfo ? <PlaceWidget onClose={detailCloseClickHandler} posto={postoSelezionato} /> : null
      }
    </div>
  );
};


export default MapWidget;
