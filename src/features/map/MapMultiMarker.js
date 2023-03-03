// import React from "react";
// import { InfoWindow, Marker } from "@react-google-maps/api";

// export default function MapMultiMarkers({
//   markers,
//   setMarkers,
//   selected,
//   setSelected,
//   locationInfo,
//   setLocationInfo,
//   circle,
//   setCircle
// }) {
//   const geocoder = new window.google.maps.Geocoder();

//   return (
//     <div>
//       {markers.map(marker => (
//         <Marker
//           // key={`${marker.lat}-${marker.lng}`}
//           position={{ lat: marker.lat, lng: marker.lng }}
//           zIndex={1}
//           draggable={true}
//           onDragEnd={event => {
//             const index = markers.findIndex(m => m.lat === marker.lat && m.lng === marker.lng);
//             const newMarkers = [...markers];
//             newMarkers[index] = {
//               lat: event.latLng.lat(),
//               lng: event.latLng.lng()
//             };
//             setMarkers(newMarkers);
//           }}
//           onClick={() => {
//             geocoder.geocode(
//               { location: { lat: marker.lat, lng: marker.lng } },
//               (results, status) => {
//                 console.log(results);
//                 if (status === "OK") {
//                   setLocationInfo({
//                     name: `${results[0].formatted_address}`,

//                     detail: `Lat: ${marker.lat}, Lng: ${marker.lng}`,
//                     googleMapsLink: `https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`
//                   });
//                 }
//               }
//             );
//             setSelected(marker);
//           }}
//         />
//       ))}

//       {selected ? (
//         <InfoWindow
//           position={{ lat: selected.lat, lng: selected.lng }}
//           onCloseClick={() => setSelected(null)}
//         >
//           <div>
//             <h2>{locationInfo.name}</h2>
//             <p className="font-bold">{locationInfo.detail}</p>
//             {locationInfo.googleMapsLink && (
//               <a
//                 href={locationInfo.googleMapsLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-700 hover:underline"
//               >
//                 View on Google Maps
//               </a>
//             )}
//             <button
//               className="text-red-500 hover:underline font-bold"
//               onClick={() => {
//                 setMarkers(markers.filter(marker => marker.time !== selected.time));
//                 setSelected(null);
//                 setLocationInfo({ name: "", detail: "", googleMapsLink: "" });
//                 if (circle) {
//                   circle.setMap(null);
//                   setCircle(null);
//                 }
//               }}
//             >
//               Remove pin
//             </button>
//           </div>
//         </InfoWindow>
//       ) : null}
//     </div>
//   );
// }
