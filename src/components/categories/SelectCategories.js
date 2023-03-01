import CafeIcon from "../../assets/icons/CafeIcon";
import FoodIcon from "../../assets/icons/FoodIcon";
import GameIcon from "../../assets/icons/GameIcon";
import MusicIcon from "../../assets/icons/MusicIcon";
import SportIconTennis from "../../assets/icons/SportIconTennis";
import TravelIcon from "../../assets/icons/TravelIcon";

export default function SelectCategories() {
  const CategoryTab = (CategoryIcon, CategoryName) => (
    <div className="flex flex-col justify-between p-[1px]">
      <div className="font-bold p-4 text-lg active:border-2 focus:selection:border-2">
        <div className="flex justify-center">{CategoryIcon}</div>
        <p className="text-center">{CategoryName}</p>
      </div>
    </div>
  );
  return (
    /** ที่ div แรก ใส่ shadow-md หลัง bg-[] */
    <>
      <div className="bg-[#ffffffaa] ">
        <h1 className="flex justify-center font-bold text-xl">What do you want to do ?</h1>
        <div className="grid grid-cols-2 justify-center">
          {/* <div className="flex flex-col"> */}
          {CategoryTab(<FoodIcon />, "Food")}
          {CategoryTab(<SportIconTennis />, "Sport")}
          {CategoryTab(<CafeIcon />, "Cafe")}
          {CategoryTab(<MusicIcon />, "Party")}
          {/* </div> */}
          {/* <div className="flex flex-col"> */}
          {CategoryTab(<GameIcon />, "Game")}
          {CategoryTab(<TravelIcon />, "Travel")}
        </div>
        {/* {CategoryTab(<SportIcon />, "Sport")} */}
        {/* </div> */}

        {/* <div className="flex justify-center py-4">
          <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-2 rounded-full font-bold text-white w-[80vw]">
            Select
          </button>
        </div> */}
      </div>
    </>
  );
}
