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
        <h1 className="font-bold text-xl">เหงาจังอยากกินหมาล่า @Mint Tower</h1>
      </div>
      <div className="flex gap-2 pt-4 mb-2">
        <PinMapIcon />
        <span className="text-[15px]">Mint Tower</span>
      </div>
      <div className="flex gap-2 pb-4">
        <div className="grid items-center">
          <TagIcon />
        </div>
        <div className="flex gap-1">{tag("#หม่าล่า")}</div>
      </div>
      <div className="flex justify-center items-center bg-[#D4D4D4] py-10">
        <div className="w-[25%] ">
          <PictureIcon size="100%" />
        </div>
      </div>
    </div>
  );
}
