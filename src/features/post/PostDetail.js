import MapMarkedIcon from "../../assets/icons/MapMarkedIcon";
import PictureIcon from "../../assets/icons/PictureIcon";
import PinMapIcon from "../../assets/icons/PinMapIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import UserIcon from "../../assets/icons/UserIcon";

export default function PostDetail({ size }) {
  // const users = [{username: 'mew', status: 'interested'},{username: 'nat', status: 'ongoing'}]
  const User = () => (
    <div className="flex flex-col justify-center items-center p-2">
      <div>
        <UserIcon size="50px" />
      </div>
      <div className="font-bold text-sm text-[#000000]">
        <p>Purinut</p>
      </div>
      <div className=" text-sm text-[#000000]">
        <p>Going</p>
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid justify-center content-center bg-[#D4D4D4] h-[156px]">
        <PictureIcon />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-sm">
            <p>Mon, 20 Feb 2023, 19.00</p>
          </div>
          <div className="flex gap-4 pt-2 mb-2">
            <PinMapIcon />
            <span className="text-[15px]">Mint Tower</span>
          </div>
        </div>
        <div className="text-sm">
          <p>38 mins</p>
        </div>
      </div>
      <div className="flex gap-4 py-4">
        <div>
          <UserIcon size="50px" />
        </div>
        <div className="flex flex-col justify-center font-bold">
          <p>Purinut S.</p>
        </div>
      </div>
      <div className="border-black border-2 p-4 rounded-lg text-sm">
        <p>
          หิวก็กินข้าว ห้าวก็กินข้าวเหมือนกัน แต่ผ่านธูปนะครับ น้อนๆ **รับสูงสุดแค่ 8คนนะครับบ
          เพราะโต๊ะใหญ่สุดร้านมีแค่นั้น TT
        </p>
      </div>
      <div className="flex gap-4 py-4">
        <div className="flex flex-col justify-center font-bold">
          <MapMarkedIcon />
        </div>
        <div className="border-black border-2 p-4 rounded-lg text-sm">
          <p>
            หิวก็กินข้าว ห้าวก็กินข้าวเหมือนกัน แต่ผ่านธูปนะครับ น้อนๆ **รับสูงสุดแค่ 8คนนะครับบ
            เพราะโต๊ะใหญ่สุดร้านมีแค่นั้น TT
          </p>
        </div>
      </div>
      <div className="flex gap-4 py-1">
        <div className="grid items-center">
          <UserGroupIcon />
        </div>
        <div className="flex gap-1 text-sm">
          <p>4/8</p>
          <p>going,</p>
          <p>4</p>
          <p>seated available</p>
        </div>
      </div>
      <div className="grid grid-cols-5 justify-center">
        <button className="flex flex-col justify-center items-center p-2">
          <PlusIcon size="50px" />
          <div className="font-bold text-sm text-[#333333]">
            <p>Invite</p>
          </div>
        </button>
        {User("Nut", "going")}
        {User("Mew", "interested")}
        {User()}
        {User()}
        {User()}
        {User()}
      </div>
    </div>
  );
}
