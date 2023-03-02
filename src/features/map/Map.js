import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from "@react-google-maps/api";
import CurrerntLocation from "./CurrentLocation";
import SearchLocation from "./SearchLocation";
import MapMarkers from "./MapMarkers";
import MapDirection from "./MapDirection";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw"
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

const center = {
  lat: 13.7450211,
  lng: 100.5235765
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [locationInfo, setLocationInfo] = useState({ name: "", detail: "" });

  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [circle, setCircle] = useState(null);

  useEffect(() => {
    const storedMarkers = JSON.parse(localStorage.getItem("markers"));

    if (storedMarkers) {
      setMarkers(storedMarkers);
    }
    console.log(storedMarkers);
  }, []);

  useEffect(() => {
    localStorage.setItem("markers", JSON.stringify(markers));
  }, [markers]);

  const onMapClick = useCallback(e => {
    setMarkers(current => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
      }
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(19);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <SearchLocation
        panTo={panTo}
        setMarkers={setMarkers}
        setSelected={setSelected}
        setLocationInfo={setLocationInfo}
      />
      <MapDirection
        setDestination={setDestination}
        setOrigin={setOrigin}
        directions={directions}
        setDirections={setDirections}
      />
      <CurrerntLocation
        panTo={panTo}
        mapRef={mapRef}
        setMarkers={setMarkers}
        setCircle={setCircle}
      />
      <GoogleMap
        id="map"
        zoom={15}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        <MapMarkers
          markers={markers}
          setMarkers={setMarkers}
          selected={selected}
          setSelected={setSelected}
          locationInfo={locationInfo}
          setLocationInfo={setLocationInfo}
          circle={circle}
          setCircle={setCircle}
        />
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "#0097FF",
                strokeOpacity: 0.7,
                strokeWeight: 5
              }
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
