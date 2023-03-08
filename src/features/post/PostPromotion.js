import PinMapIcon from "../../assets/icons/PinMapIcon";
import PromotionSmallIcon from "../../assets/icons/PromotionSmallIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import imageOne from "../../assets/icons/imageOne.jpg";
import imageTwo from "../../assets/icons/imageTwo.jpg";
import SportSmallIconTennis from "../../assets/icons/SportSmallIconTennis";

export default function PostPromotion() {
  return (
    <div className="flex flex-col">
      <div className="px-2 pt-2">
        <div className="font-bold text-xl">เช่าคอร์ดแบต มา 4 จ่าย 3 /ชม.</div>
        <div className="flex justify-between">
          <div className="py-2">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-6">
                  <PinMapIcon />
                </div>
                <div className="flex items-center justify-center h-6">
                  <SportSmallIconTennis size="15px" />
                </div>
                <div className="flex items-center justify-center h-6">
                  <PromotionSmallIcon size="15px" />
                </div>
              </div>
              <div>
                <div className="text-sm flex items-center h-6">Winner sports avenue</div>
                <div className="text-sm flex items-center h-6">Sport</div>
                <div className="flex items-center h-6">
                  <div className="text-xs rounded-full bg-gradient-to-b from-[#EB4E53] to-[#F4C073] text-white px-2 min-w-min">
                    25% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 py-2 ml-1">
            <div className="flex items-start pt-1">
              <TimeIcon />
            </div>
            <div>
              <div className="text-xs h-6 flex items-center">19.00 - 21.00</div>
              <div className="text-xs h-6 flex items-center">Wed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 w-[50%] flex justify-center items-center">
          <img src={imageOne} alt="imageOne" className="rounded-md w-[100%] h-[100%]" />
        </div>
        <div className="p-2 w-[50%] flex justify-center items-center">
          <img src={imageTwo} alt="imageTwo" className="rounded-md w-[100%] h-[100%]" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full my-2 font-bold text-white w-[95%] min-w-min drop-shadow-lg">
          Create event
        </button>
      </div>
    </div>
  );
}
