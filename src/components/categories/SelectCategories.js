import CafeIcon from "../../assets/icons/CafeIcon";
import FoodIcon from "../../assets/icons/FoodIcon";
import GameIcon from "../../assets/icons/GameIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import TravelIcon from "../../assets/icons/TravelIcon";
import { CAFE, FOOD, GAME, PARTY, SPORT, TRAVEL } from "../../config/constant";

export default function SelectCategories({ onClose, setEventDetail }) {
  const categories = [
    { image: <FoodIcon />, title: FOOD },
    { image: <CafeIcon />, title: CAFE },
    { image: <TravelIcon />, title: TRAVEL },
    { image: <GameIcon />, title: GAME },
    { image: <MusicIcon />, title: PARTY },
    { image: <TravelIcon />, title: SPORT }
  ];

  const handleClick = (title) => {
    setEventDetail((state) => ({ ...state, category: title }));
    onClose();
  };

  const CategoryTab = (key, CategoryIcon, CategoryName) => (
    <div
      key={key}
      onClick={() => handleClick(CategoryName)}
      name={CategoryName}
      className="flex flex-col cursor-pointer rounded-lg hover:border-2 hover:border-gray-400"
    >
      <div className="font-bold p-4 text-lg">
        <div className="flex justify-center">{CategoryIcon}</div>
        <p className="text-center">{CategoryName}</p>
      </div>
    </div>
  );
  return (
    /** ที่ div แรก ใส่ shadow-md หลัง bg-[] */
    <>
      <div className="bg-[#ffffffaa] ">
        <div className="grid grid-cols-2 gap-2 justify-center">
          {categories.map((category, idx) => CategoryTab(idx, category.image, category.title))}
        </div>
      </div>
    </>
  );
}
