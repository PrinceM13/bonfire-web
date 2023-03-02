// *********************NON DESTRUCTURE CODE************************//

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   useLoadScript,
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   DirectionsService,
//   DirectionsRenderer,
//   Autocomplete
// } from "@react-google-maps/api";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "100vh",
//   width: "100vw"
// };

// const center = {
//   lat: 13.7450211,
//   lng: 100.5235765
// };

// export default function Map() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries
//   });

//   const [markers, setMarkers] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [locationInfo, setLocationInfo] = useState({ name: "", detail: "" });

//   const [directions, setDirections] = useState(null);
//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");

//   useEffect(() => {
//     const storedMarkers = JSON.parse(localStorage.getItem("markers"));

//     if (storedMarkers) {
//       setMarkers(storedMarkers);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("markers", JSON.stringify(markers));
//   }, [markers]);
//   const onMapClick = useCallback(e => {
//     setMarkers(current => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date()
//       }
//     ]);
//     console.log(e);
//   }, []);

//   const mapRef = useRef();
//   const onMapLoad = useCallback(map => {
//     mapRef.current = map;
//   }, []);

//   const originRef = useRef();
//   const destinationRef = useRef();

//   async function calculateDirections() {
//     if (originRef.current.value === "" || destinationRef.current.value === "") {
//       return;
//     }
//     const directionsService = new window.google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: originRef.current.value,
//       destination: destinationRef.current.value,
//       travelMode: window.google.maps.TravelMode.DRIVING
//     });
//     setDirections(results);
//   }

//   function clearDirection() {
//     setDirections(null);
//     // setDestination("");
//     // setOrigin("");
//     originRef.current.value = "";
//     destinationRef.current.value = "";
//   }

//   const panTo = useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(19);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <Search
//         panTo={panTo}
//         setMarkers={setMarkers}
//         setSelected={setSelected}
//         setLocationInfo={setLocationInfo}
//       />
//       <div>
//         <div>
//           <Autocomplete>
//             <input
//               onChange={e => setOrigin(e.target.value)}
//               placeholder="Enter origin"
//               ref={originRef}
//             />
//           </Autocomplete>
//           <Autocomplete>
//             <input
//               onChange={e => {
//                 setDestination(e.target.value);
//               }}
//               placeholder="Enter destination"
//               ref={destinationRef}
//             />
//           </Autocomplete>
//           <button className=" bg-blue-400 rounded-lg" onClick={calculateDirections}>Get Directions</button>
//           <button className=" bg-blue-400 rounded-lg" onClick={clearDirection}>Clear route</button>
//         </div>
//         {directions && (
//           <div>
//             <div>Distance: {directions.routes[0].legs[0].distance.text}</div>
//             <div>Duration: {directions.routes[0].legs[0].duration.text}</div>
//           </div>
//         )}
//       </div>

//       <Locate panTo={panTo} />
//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={15}
//         center={center}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//       >
//         {markers.map(marker => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             draggable={true}
//             onDragEnd={event => {
//               const index = markers.findIndex(m => m.lat === marker.lat && m.lng === marker.lng);
//               const newMarkers = [...markers];
//               newMarkers[index] = { lat: event.latLng.lat(), lng: event.latLng.lng() };
//               setMarkers(newMarkers);
//             }}
//             onClick={() => {
//               setSelected(marker);
//               setLocationInfo({
//                 name: "",
//                 detail: `Lat: ${marker.lat}, Lng: ${marker.lng}`
//               });
//             }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => setSelected(null)}
//           >
//             <div>
//               <h2>{locationInfo.name}</h2>
//               <p className="font-bold">{locationInfo.detail}</p>
//               <button
//                 className="text-red-500 hover:underline font-bold"
//                 onClick={() => {
//                   setMarkers(markers.filter(marker => marker.time !== selected.time));
//                   setSelected(null);
//                   setLocationInfo({ name: "", detail: "" });
//                 }}
//               >
//                 Remove pin
//               </button>
//             </div>
//           </InfoWindow>
//         ) : null}
//         {directions && (
//           <DirectionsRenderer
//             directions={directions}
//             options={{
//               polylineOptions: {
//                 strokeColor: "#000",
//                 strokeOpacity: 0.7,
//                 strokeWeight: 5
//               }
//             }}
//           />
//         )}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className=" bg-blue-400 rounded-lg"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             });
//             console.log(position);
//           },
//           () => null
//         );
//       }}
//     >
//       Current Location
//     </button>
//   );
// }

// function Search({ panTo, setMarkers, setSelected, setLocationInfo }) {
//   const searchInputRef = useRef(null);
//   const autocompleteRef = useRef(null);

//   const onPlaceChanged = () => {
//     const place = autocompleteRef.current.getPlace();

//     if (!place.geometry || !place.geometry.location) {
//       console.log("No location found");
//       return;
//     }

//     const lat = place.geometry.location.lat();
//     const lng = place.geometry.location.lng();

//     panTo({ lat, lng });

//     setMarkers(current => [...current, { lat, lng, time: new Date() }]);
//     setSelected({ lat, lng, time: new Date() });
//     setLocationInfo({
//       name: place.name,
//       detail: place.formatted_address
//     });

//     searchInputRef.current.blur();
//   };

//   return (
//     <div className="search">
//       <Autocomplete
//         onLoad={autocomplete => (autocompleteRef.current = autocomplete)}
//         onPlaceChanged={onPlaceChanged}
//       >
//         <input
//           type="text"
//           placeholder="Search for location"
//           className="search-input"
//           ref={searchInputRef}
//         />
//       </Autocomplete>
//     </div>
//   );
// }
