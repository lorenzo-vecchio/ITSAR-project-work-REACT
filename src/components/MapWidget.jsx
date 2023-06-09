import mapboxgl from '!mapbox-gl';
import React, { useEffect } from "react";

const MapWidget = (props) => {
  let luoghi;


  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibG9yZW56by12ZWNjaGlvIiwiYSI6ImNsaTNhb2hmMjB6OXIzcG80c3JpdXd3OWUifQ.6rCrnnxEwWoyKx7PLYqt6Q";
    var map = new mapboxgl.Map({
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
    fetch("http://127.0.0.1:5000/luoghi", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          luoghi = result;
          luoghi.forEach((luogo) => {
            const marker = new mapboxgl.Marker()
            .setLngLat([luogo.longitudine, luogo.latitudine])
            .addTo(map);
          });
        },
        // Nota: è importante gestire gli errori qui
        // invece di un blocco catch() in modo da non fare passare
        // eccezioni da bug reali nei componenti.
        (error) => {
          
          // gestisci errori
          
        }
      )
  }, []);
  return (
    <div>
      <div id="map" style={{width: props.width, height: props.height, borderRadius: props.borderRadius}}></div>
    </div>
  );
};


export default MapWidget;
