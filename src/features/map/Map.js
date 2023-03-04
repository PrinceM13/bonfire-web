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
// import MapMultiMarkers from "./MapMultiMarker";
import MapDirection from "./MapDirection";
import mapStyles from "./mapStyles";
import PinGoogleMapSmall from "../../assets/icons/PinGoogleMapSmall";
import CurrentPoint from "../../assets/icons/CurrentPoint";
// import ChooseDestination from "../../assets/icons/ChooseDestination";

const libraries = ["places"];
const mapContainerStyle = {
  height: "92vh",
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

export default function Map({ isMultiMarker = true }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = useState([]);
  // const [markers, setMarkers] = useState({});
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

  const onMapClick = useCallback(
    e => {
      if (!isMultiMarker) {
        setMarkers([
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date()
          }
        ]);
      } else {
        setMarkers(current => [
          ...current,
          {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date()
          }
        ]);
      }
    },
    [markers]
  );

  // const onMapClick = useCallback(e => {
  //   setMarkers([{
  //     lat: e.latLng.lat(),
  //     lng: e.latLng.lng(),
  //     time: new Date()
  //   }]);
  // }, []);

  // const onMapClick = useCallback(e => {
  //   setMarkers(current => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date()
  //     }
  //   ]);
  // }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(19);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <div className="px-8 pt-[5vh] bg-white h-[13vh] pb-[2.7vh] top-0 left-0 fixed w-full shadow-lg flex z-10">
        <div className="bg-gradient-to-b from-[#6A6A6A] to-[#D4D4D4] p-[1.5px] w-full rounded-full">
          <div className="flex w-full items-center justify-center bg-white rounded-full px-3 py-1 shadow-md gap-2">
            <div>
              <PinGoogleMapSmall />
            </div>
            <SearchLocation
              panTo={panTo}
              setMarkers={setMarkers}
              setSelected={setSelected}
              setLocationInfo={setLocationInfo}
            />
          </div>
        </div>
      </div>
      <div>
        {/* <MapDirection
          setDestination={setDestination}
          setOrigin={setOrigin}
          directions={directions}
          setDirections={setDirections}
        /> */}

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
          {/* {directions && (
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
          )} */}
          <div className="fixed left-2 bottom-24">
            <CurrerntLocation panTo={panTo} />
          </div>
          {/* <div className="fixed left-2 bottom-24">
            <ChooseDestination />
          </div> */}
        </GoogleMap>
      </div>
      <div className="flex justify-between items-center bg-white h-[8vh] px-4 bottom-[-1px] right-0 fixed w-full shadow-lg">
        <div className="flex grow justify-center">
          <div>
            <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-12 rounded-full font-bold text-white ">
              SELECT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
