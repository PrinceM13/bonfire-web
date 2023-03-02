import { Autocomplete } from "@react-google-maps/api";
import React, { useRef } from "react";

export default function MapDirection({ setOrigin, setDestination, directions, setDirections }) {
  const originRef = useRef();
  const destinationRef = useRef();

  async function calculateDirections() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING
    });
    setDirections(results);
  }

  function clearDirection() {
    setDirections(null);
    // setDestination("");
    // setOrigin("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div>
      <div>
        <Autocomplete>
          <input
            onChange={e => setOrigin(e.target.value)}
            placeholder="Enter origin"
            ref={originRef}
          />
        </Autocomplete>
        <Autocomplete>
          <input
            onChange={e => {
              setDestination(e.target.value);
            }}
            placeholder="Enter destination"
            ref={destinationRef}
          />
        </Autocomplete>
        <button className=" bg-blue-400 rounded-lg" onClick={calculateDirections}>
          Get Directions
        </button>
        <button className=" bg-blue-400 rounded-lg" onClick={clearDirection}>
          Clear route
        </button>
      </div>
      {directions && (
        <div>
          <div>Distance: {directions.routes[0].legs[0].distance.text}</div>
          <div>Duration: {directions.routes[0].legs[0].duration.text}</div>
        </div>
      )}
    </div>
  );
}
