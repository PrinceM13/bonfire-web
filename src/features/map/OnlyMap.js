import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  Circle
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "90vh",
  width: "screen"
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

export default function OnlyMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });
  //       const onMapClick = useCallback(e => {
  //     setMarkers(current => [
  //       ...current,
  //       {
  //         lat: e.latLng.lat(),
  //         lng: e.latLng.lng(),
  //         time: new Date()
  //       }
  //     ]);
  //   }, []);
  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        onLoad={onMapLoad}
        options={options}
        mapContainerStyle={mapContainerStyle}
      ></GoogleMap>
    </>
  );
}
