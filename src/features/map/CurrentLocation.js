import { useEffect, useRef, useState } from "react";

export default function CurrentLocation({
  panTo,
  markers,
  setMarkers,
  mapRef,
  circle,
  setCircle,
  handleChange
}) {
  const [radius, setRadius] = useState(1000);

  const onRadiusChange = event => {
    const newRadius = +event.target.value;
    setRadius(newRadius);

    if (circle) {
      circle.setRadius(newRadius);
    }
  };

  
  const onGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const geocoder = new window.google.maps.Geocoder();
        panTo({ lat, lng });
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === "OK") {
            handleChange({
              latitude: lat,
              longitude: lng,
              location: results[0].formatted_address
            });
          }
        });
        
        setMarkers(prevMarkers => [...prevMarkers, { lat, lng }]);
        if (circle) {
          circle.setMap(null);
          setCircle(null);
        }

        const newCircle = new window.google.maps.Circle({
          center: { lat, lng },
          radius: radius,
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

  const onClearLocation = () => {
    setMarkers([])
    if (circle) {
      circle.setMap(null)
      setCircle(null)
    }
  }

  return (
    <div>
      <button className="bg-blue-400 rounded-lg" onClick={onGetCurrentLocation}>
        Current Location
      </button>
      <div value={radius} onChange={onRadiusChange}>
        <label>{radius} Meters</label>
        <input type="range" min="500" max="5000" />
      </div>
      <button className="bg-red-400 rounded-lg" onClick={onClearLocation}>Clear</button>
    </div>
  );
}
