import { useRef } from "react";

export default function useScrollTo(setDummyOff) {
  const ref = useRef();
  const action = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setDummyOff();
    }, 1500);
  };
  return { ref, action };
}
