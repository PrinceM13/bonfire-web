import Map from "../features/map/Map";
import OnlyMap from "../features/map/OnlyMap";

export default function GoogleMap() {
  return (
    <>
      <Map isMultiMarker={true} />
      {/* <OnlyMap/> */}
    </>
  );
}
