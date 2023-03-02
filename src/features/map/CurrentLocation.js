export default function CurrentLocation({ panTo }) {
    return (
      <button
        className=" bg-blue-400 rounded-lg"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            position => {
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
        Current Location
      </button>
    );
  }