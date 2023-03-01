import PinMapIcon from "../../assets/icons/PinMapIcon";
import PromotionSmallIcon from "../../assets/icons/PromotionSmallIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import imageOne from "../../assets/icons/imageOne.jpg";
import imageTwo from "../../assets/icons/imageTwo.jpg";
import SportSmallIconTennis from "../../assets/icons/SportSmallIconTennis";

export default function PostPromotion({ size }) {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl">เช่าคอร์ดแบต มา 4 จ่าย 3 /ชม.</div>
      <div className="flex justify-between">
        <div className="flex flex-col py-2 gap-1">
          <div className="flex gap-2">
            <div>
              <PinMapIcon />
            </div>
            <div className="text-sm">Winner sports avenue</div>
          </div>
          <div className="flex gap-2">
            <div>
              <SportSmallIconTennis size="15px" />
            </div>
            <div className="text-sm">Sport</div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <PromotionSmallIcon size="15px" />
            </div>
            <div className="text-sm rounded-full bg-[#EB4E53] text-white font-bold px-4 m-auto min-w-min">
              25% OFF
            </div>
          </div>
        </div>
        <div className="flex gap-2 py-2">
          <div className="flex items-start">
            <TimeIcon />
          </div>
          <div>
            <div className="text-xs">19.00 - 21.00</div>
            <div className="text-xs">Wed</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 w-[50%]">
          <img src={imageOne} alt="imageOne" className="rounded-md" />
        </div>
        <div className="p-2 w-[50%]">
          <img src={imageTwo} alt="imageTwo" className="rounded-md" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full mt-2 font-bold text-white w-[50%] min-w-min">
          Create event
        </button>
      </div>
    </div>
  );
}
