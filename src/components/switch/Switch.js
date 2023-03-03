export default function Switch() {
  return (
    <div className="flex items-start w-full bg-white fixed top-[18vh] left-0 z-40 shadow-lg">
      <div className="border-b-2 text-center w-1/2 border-black font-bold pb-1 text-base">
        <button>Post</button>
      </div>
      <div className="text-center w-1/2 font-bold pb-1 text-[#B8B7B7] text-base">
        <button>Map</button>
      </div>
    </div>
  );
}
