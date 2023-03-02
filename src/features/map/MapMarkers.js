import React from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";

export default function MapMarkers({
  markers,
  setMarkers,
  selected,
  setSelected,
  locationInfo,
  setLocationInfo
}) {
  const geocoder = new window.google.maps.Geocoder();

  return (
    <div>
      {markers.map(marker => (
        // <Marker
        //   key={`${marker.lat}-${marker.lng}`}
        //   position={{ lat: marker.lat, lng: marker.lng }}
        //   draggable={true}
        //   onDragEnd={event => {
        //     const index = markers.findIndex(m => m.lat === marker.lat && m.lng === marker.lng);
        //     const newMarkers = [...markers];
        //     newMarkers[index] = {
        //       lat: event.latLng.lat(),
        //       lng: event.latLng.lng()
        //     };
        //     setMarkers(newMarkers);
        //   }}
        //   onClick={() => {
        //     setSelected(marker);
        //     setLocationInfo({
        //       name: locationInfo.name,
        //       detail: ` Lat: ${marker.lat}, Lng: ${marker.lng}`
        //     });
        //   }}
        // />
        <Marker
          // key={`${marker.lat}-${marker.lng}`}
          position={{ lat: marker.lat, lng: marker.lng }}
          draggable={true}
          onDragEnd={event => {
            const index = markers.findIndex(m => m.lat === marker.lat && m.lng === marker.lng);
            const newMarkers = [...markers];
            newMarkers[index] = {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            };
            setMarkers(newMarkers);
          }}
          onClick={() => {
            geocoder.geocode(
              { location: { lat: marker.lat, lng: marker.lng } },
              (results, status) => {
                console.log(results);
                if (status === "OK") {
                  setLocationInfo({
                    name: `${results[0].formatted_address}`,
                    // name: `${
                    //   results[0].formatted_address.split(" ")[
                    //     results[0].formatted_address.split(" ").length - 1
                    //   ]
                    // } (${results[0].formatted_address
                    //   .split(" ")
                    //   .slice(0, results[0].formatted_address.split(" ").length - 1)
                    //   .join(" ")})`,
                    detail: `Lat: ${marker.lat}, Lng: ${marker.lng}`
                  });
                }
              }
            );
            setSelected(marker);
          }}
        />
      ))}

      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h2>{locationInfo.name}</h2>
            <p className="font-bold">{locationInfo.detail}</p>
            <button
              className="text-red-500 hover:underline font-bold"
              onClick={() => {
                setMarkers(markers.filter(marker => marker.time !== selected.time));
                setSelected(null);
                setLocationInfo({ name: "", detail: "" });
              }}
            >
              Remove pin
            </button>
          </div>
        </InfoWindow>
      ) : null}
    </div>
  );
}
