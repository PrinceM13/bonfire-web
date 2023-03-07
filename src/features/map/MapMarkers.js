import React, { useEffect, useState } from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

export default function MapMarkers({
  markers,
  setMarkers,
  selected,
  setSelected,
  locationInfo,
  setLocationInfo,
  circle,
  setCircle,
  handleChange,
  isEditAble
}) {
  const geocoder = new window.google.maps.Geocoder();

  return (
    <div>
      {markers?.map((marker, idx) => (
        <Marker
          // key={`${marker.lat}-${marker.lng}`}
          key={idx}
          position={{ lat: marker.lat, lng: marker.lng }}
          // visible={marker.visible}
          // draggable={true}
          // animation={window.google.maps.Animation.BOUNCE}
          // onDragEnd={event => {
          //   const index = markers.findIndex(m => m.lat === marker.lat && m.lng === marker.lng);
          //   console.log("index", index);
          //   const newMarkers = [...markers];
          //   newMarkers[index] = {
          //     lat: event.latLng.lat(),
          //     lng: event.latLng.lng()
          //   };
          //   console.log("wtfffffffffffff", newMarkers[index]);
          //   setMarkers(newMarkers);

          // }}
          onClick={() => {
            geocoder.geocode(
              { location: { lat: marker.lat, lng: marker.lng } },
              (results, status) => {
                console.log(results);
                console.log("in hereeeeeeeeeee");
                if (status === "OK") {
                  setLocationInfo({
                    name: `${results[0].formatted_address}`,
                    // detail: `Lat: ${marker.lat}, Lng: ${marker.lng}`,
                    googleMapsLink: `https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`
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
            <Link to={`/events/${selected.id}`}>
              <div className="font-bold text-blue-500 text-lg underline ">
                {selected.markerTitle}
                <span className="text-xs"> (click to see event detail)</span>
              </div>
            </Link>
            <h2>{locationInfo.name}</h2>
            <p className="font-bold">{locationInfo.detail}</p>
            {locationInfo.googleMapsLink && (
              <a
                href={locationInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                View on Google Maps
              </a>
            )}
            {isEditAble && (
              <button
                className="text-red-500 hover:underline font-bold"
                onClick={() => {
                  console.log(typeof handleChange);
                  console.log("This is handle change!!!!!!!!!", handleChange);
                  console.log(setSelected);
                  handleChange({ latitude: "", longitude: "", location: "" });
                  setMarkers(
                    markers.filter(
                      marker => marker.lat !== selected.lat || marker.lng !== selected.lng
                    )
                  );
                  setSelected(null);
                  setLocationInfo({ name: "", detail: "", googleMapsLink: "" });

                  if (circle) {
                    circle.setMap(null);
                    setCircle(null);
                  }
                }}
              >
                Remove pin
              </button>
            )}
          </div>
        </InfoWindow>
      ) : null}
    </div>
  );
}

{
  /* {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h2>{locationInfo.name}</h2>
            <p className="font-bold">{locationInfo.detail}</p>
            {locationInfo.googleMapsLink && (
              <a
                href={locationInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                View on Google Maps
              </a>
            )}
            <button
              className="text-red-500 hover:underline font-bold"
              onClick={() => {
                setMarkers({});
                setSelected(null);
                setLocationInfo({ name: "", detail: "", googleMapsLink: "" });
                if (circle) {
                  circle.setMap(null);
                  setCircle(null);
                }
              }}
            >
              Remove pin
            </button>
          </div>
        </InfoWindow>
      ) : null} */
}
