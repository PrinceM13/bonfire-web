import PictureIcon from "../../assets/icons/PictureIcon";
import PinMapIcon from "../../assets/icons/PinMapIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
// import UserIcon from "../../assets/icons/UserIcon";
import MapMarkedIcon from "../../assets/icons/MapMarkedIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import Avatar from "../../components/Avatar";

export default function PostEventDetail({ size }) {
  const User = () => (
    <div className="flex flex-col justify-center items-center p-2 w-[20%]">
      <div>
        <Avatar size="100%" />
      </div>
      <div className="font-bold text-sm text-[#000000]">
        <div>Purinut</div>
      </div>
      <div className=" text-sm text-[#000000]">
        <div>Going</div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="flex justify-center items-center bg-[#D4D4D4] h-1/2 p-10">
        <div className="w-[25%]">
          <PictureIcon size="100%" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="my-2">
          <div className="flex flex-wrap text-sm gap-1">
            <div>Mon,</div>
            <div>20 Feb 2023,</div>
            <div>19.00</div>
          </div>
          <div className="flex gap-4 pt-2">
            <div className="flex items-center w-[5%]">
              <PinMapIcon size="100%" />
            </div>
            <div className="text-[15px]">Mint Tower</div>
          </div>
        </div>
        <div className="text-sm my-2">
          <div>38 mins</div>
        </div>
      </div>
      <div className="flex gap-4 my-2">
        <div className="w-[20%]">
          <Avatar size="100%" />
        </div>
        <div className="flex flex-col justify-center font-bold">
          <div>Purinut S.</div>
        </div>
      </div>
      <div className="border-black border-2 p-4 rounded-lg text-sm">
        <p>
          หิวก็กินข้าว ห้าวก็กินข้าวเหมือนกัน แต่ผ่านธูปนะครับ น้อนๆ **รับสูงสุดแค่ 8คนนะครับบ
          เพราะโต๊ะใหญ่สุดร้านมีแค่นั้น TT
        </p>
      </div>
      <div className="flex gap-4 py-2">
        <div className="flex items-center w-[25%]">
          <MapMarkedIcon size="100%" />
        </div>
        <div className="border-black border-2 p-4 rounded-lg text-sm">
          <p>719 อาคารมิ้นท์ ทาวเวอร์ แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</p>
        </div>
      </div>
      <div className="flex gap-4 py-1">
        <div className="flex items-center w-[5%]">
          <UserGroupIcon size="100%" />
        </div>
        <div className="flex flex-wrap gap-1 text-sm">
          <div>4/8 going,</div>
          <div>4 seated available</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button className="flex flex-col items-center pt-2 px-2 w-[20%]">
          <div>
            <PlusIcon size="100%" />
          </div>
          <div className="font-bold text-xs text-[#333333]">
            <div>Invite</div>
          </div>
        </button>
        {User()}
        {User()}
        {User()}
        {User()}
        {User()}
        {User()}
        {User()}
      </div>
    </div>
  );
}
