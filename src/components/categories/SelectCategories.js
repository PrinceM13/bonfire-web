import CafeIcon from "../../assets/icons/CafeIcon";
import FoodIcon from "../../assets/icons/FoodIcon";
import GameIcon from "../../assets/icons/GameIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import TravelIcon from "../../assets/icons/TravelIcon";
import SportIconTennis from "../../assets/icons/SportIconTennis";
import { CAFE, FOOD, GAME, PARTY, SPORT, TRAVEL } from "../../config/constant";

export default function SelectCategories({ onClose, setEventDetail }) {
  const categories = [
    { image: <FoodIcon />, title: FOOD },
    { image: <SportIconTennis />, title: SPORT },
    { image: <CafeIcon />, title: CAFE },
    { image: <MusicIcon />, title: PARTY },
    { image: <GameIcon />, title: GAME },
    { image: <TravelIcon />, title: TRAVEL }
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
      <div className="font-bold p-4 text-md">
        <div className="flex justify-center">{CategoryIcon}</div>
        <p className="text-center">{CategoryName}</p>
      </div>
    </div>
  );
  return (
    /** ที่ div แรก ใส่ shadow-md หลัง bg-[] */
    <>
      <div className="">
        <div className="grid grid-cols-2 justify-center">
          {categories.map((category, idx) => CategoryTab(idx, category.image, category.title))}
        </div>
      </div>
    </>
  );
}
