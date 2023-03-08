import BounceLoader from "react-spinners/BounceLoader";

export default function Spinner() {
  return (
    <div
      className={` fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-[#232323aa] z-50`}
    >
      <div className="flex justify-center mt-[45vh]">
        <BounceLoader color="#36d7b7" cssOverride={{}} loading size={100} speedMultiplier={1} />
      </div>
    </div>
  );
}
