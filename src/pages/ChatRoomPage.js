import { Link } from "react-router-dom";
import InsertPhotoIcon from "../assets/icons/InsertPhotoIcon";

export default function ChatRoomPage() {
  return (
    <>
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Link className="w-[60%]" to="/chat/1">
            <div className="border-2 cursor-pointer border-blue-400 rounded-lg px-4 py-2">
              Room 1
            </div>
          </Link>
          <Link className="w-[60%]" to="/chat/2">
            <div className="border-2 cursor-pointer border-blue-400 rounded-lg px-4 py-2">
              Room 2
            </div>
          </Link>
          <Link className="w-[60%]" to="/chat/3">
            <div className="border-2 cursor-pointer border-blue-400 rounded-lg px-4 py-2">
              Room 3
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
