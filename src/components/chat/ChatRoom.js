export default function ChatRoom() {
  return (
    <div className="flex justify-between bg-white py-2 border-b-2 border-black">
      <div>
        <img />
      </div>
      <div>
        <div>
          <span className="font-bold text-[12px] text-[#333333]">
            Tomorrow, Sat, 18 Feb 2023, 7:00 PM
          </span>
        </div>
        <div className="text-xl font-bold">
          <span>นัดตีแบด (19.00 - 20.00)</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <span className="font-bold text-xs">4m</span>
        </div>
        <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
        {/* <div className="rounded-full w-2 h-2 bg-transparent"></div> */}
      </div>
    </div>
  );
}
