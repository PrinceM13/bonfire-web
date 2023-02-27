export default function DistanceSlideBar() {
  return (
    <div className="flex w-full bg-white gap-2">
      <div className="grow">
        <label
          htmlFor="default-range"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Distance 30 Km:
        </label>
        <input
          type="range"
          value="50"
          className="w-full h-[1px] bg-black cursor-pointer accent-[#EB4E53]"
        />
      </div>
      <div className="flex-none grid content-end">
        <button className="font-bold text-white bg-[#EB4E53] rounded-full px-4 py-1">Save</button>
      </div>
    </div>
  );
}
