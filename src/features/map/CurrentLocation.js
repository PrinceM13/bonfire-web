import { useState } from "react";

export default function CurrentLocation({ panTo, markers, setMarkers, mapRef, circle, setCircle }) {
  const onGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        panTo({ lat: latitude, lng: longitude });

        if (circle) {
          circle.setMap(null);
          setCircle(null);
        }

        // if (markers.length > 0) {
        //   setMarkers([])
        // }

        setMarkers(prevMarkers => [...prevMarkers, { lat: latitude, lng: longitude }]);
        const newCircle = new window.google.maps.Circle({
          center: { lat: latitude, lng: longitude },
          radius: 1000,
          strokeColor: "#ff6200",
          strokeOpacity: 0.7,
          strokeWeight: 2,
          fillColor: "#ff6200",
          fillOpacity: 0.1
        });
        newCircle.setMap(mapRef.current);
        setCircle(newCircle);
      },
      () => null
    );
  };
  return (
    <button className="bg-blue-400 rounded-lg" onClick={onGetCurrentLocation}>
      Current Location
    </button>
  );
}


