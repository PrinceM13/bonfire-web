import { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function SearchLocation({ panTo, setMarkers, setSelected, setLocationInfo }) {
  const searchInputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();

    if (!place.geometry || !place.geometry.location) {
      console.log("No location found");
      return;
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    panTo({ lat, lng });

    setMarkers((current) => [...current, { lat, lng, time: new Date() }]);
    setSelected({ lat, lng, time: new Date() });
    setLocationInfo({
      name: place.name,
      detail: place.formatted_address
    });

    searchInputRef.current.blur();
  };

  return (
    <div className="w-full">
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Search Location"
          ref={searchInputRef}
        />
      </Autocomplete>
    </div>
  );
}
