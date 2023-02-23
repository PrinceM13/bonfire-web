import UserIcon from "../../assets/icons/UserIcon";
import PinMapIcon from "../../assets/icons/PinMapIcon";
import TagIcon from "../../assets/icons/TagIcon";
import PictureIcon from "../../assets/icons/PictureIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import StarIcon from "../../assets/icons/StarIcon";
import { Link } from "react-router-dom";

export default function PostPromotion({ size }) {
  const tag = (tagTitle) => (
    <span className="text-[10px] bg-[#D4D4D4] rounded-full px-2">{tagTitle}</span>
  );
  return (
    <div className="bg-white ">
      <div className="font-bold text-center mb-4">
        <p>Discount available</p>
      </div>
      <div className="flex justify-items-start">
        <h1 className="font-bold text-4xl">เหงาจังอยากกินหมาล่า @Mint Tower</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 pt-4 mb-2">
            <PinMapIcon />
            <span className="text-[15px]">Mint Tower</span>
          </div>

          <div className="flex gap-4 pb-4">
            <div className="grid items-center">
              <TagIcon />
            </div>
            <div className="flex gap-1">
              {tag("#หม่าล่า")}
              {tag("#เม้ามอย")}
              {tag("#หาเพื่อนกิน")}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex mb-4">
            <UserIcon size="50px" />
          </div>
          <div className="flex justify-center items-center gap-2 mb-2 bg-[#EB4E53] rounded-full">
            <div>
              <StarIcon />
            </div>
            <div className="text-white">
              <p>3.5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center content-center bg-[#D4D4D4] h-[156px]">
        <PictureIcon />
      </div>
      <div className="py-4 flex justify-between">
        <div>
          <div className="flex gap-4 py-1">
            <div className="grid items-center">
              <CalendarIcon />
            </div>
            <p className="text-sm">20/2/2023</p>
          </div>
          <div className="flex gap-4 py-1">
            <div className="grid items-center">
              <TimeIcon />
            </div>
            <p className="text-sm">19.00 - 21.00</p>
          </div>
        </div>
        <div>
          <div className="flex gap-4 py-1">
            <div className="grid items-center">
              <UserGroupIcon />
            </div>
            <div className="flex gap-1 text-sm">
              <p>4/8</p>
              <p>going,</p>
              <p>10</p>
              <p>interested</p>
            </div>
          </div>
          <div>
            <Link to="/chat">
              <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] w-full p-1 px-2 rounded-full mt-2 font-bold text-white">
                JOIN US
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-black border-2 p-4 rounded-lg text-sm">
        <p>
          หิวก็กินข้าว ห้าวก็กินข้าวเหมือนกัน แต่ผ่านธูปนะครับ น้อนๆ **รับสูงสุดแค่ 8คนนะครับบ
          เพราะโต๊ะใหญ่สุดร้านมีแค่นั้น TT
        </p>
      </div>
    </div>
  );
}
