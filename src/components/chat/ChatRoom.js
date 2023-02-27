import InsertPhotoIcon from "../../assets/icons/InsertPhotoIcon";

export default function ChatRoom() {
  return (
    <div className="flex justify-between bg-white py-2 border-b-2 border-black px-4">
      <div className="flex items-center bg-[#ffffff] w-[15%]">
        <InsertPhotoIcon />
      </div>
      <div>
        <div className="font-bold text-[12px] text-[#333333]">
          Tomorrow, Sat, 18 Feb 2023, 7:00 PM
        </div>
        <div className="text-xl font-bold">นัดตีแบด (19.00 - 20.00)</div>
      </div>
      <div className="flex flex-col justify-between w-[8%]">
        <div className="font-bold text-xs">4m</div>
        <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
        <div className="rounded-full w-2 h-2 invisible"></div>
      </div>
    </div>
  );
}
