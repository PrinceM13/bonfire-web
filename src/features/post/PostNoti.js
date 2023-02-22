import PinMapIcon from "../../assets/icons/PinMapIcon";
import TagIcon from "../../assets/icons/TagIcon";
import PictureIcon from "../../assets/icons/PictureIcon";

export default function PostNoti() {
  const tag = (tagTitle) => (
    <span className="text-[10px] bg-[#D4D4D4] rounded-full px-2">{tagTitle}</span>
  );
  return (
    <div>
      <div className="flex justify-items-start">
        <h1 className="font-bold text-4xl">เหงาจังอยากกินหมาล่า @Mint Tower</h1>
      </div>
      <div className="flex gap-4 pt-4 mb-2">
        <PinMapIcon />
        <span className="text-[15px]">Mint Tower</span>
      </div>
      <div className="flex gap-4 pb-4">
        <div className="grid items-center">
          <TagIcon />
        </div>
        <div className="flex gap-1">{tag("#หม่าล่า")}</div>
      </div>
      <div className="grid justify-center content-center bg-[#D4D4D4] h-[156px]">
        <PictureIcon />
      </div>
    </div>
  );
}
