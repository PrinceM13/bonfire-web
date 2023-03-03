import CurrentPoint from "../../assets/icons/CurrentPoint";

export default function CurrentLocation({ panTo }) {
  return (
    <button
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            console.log(position);
          },
          () => null
        );
      }}
    >
      <CurrentPoint />
    </button>
  );
}
