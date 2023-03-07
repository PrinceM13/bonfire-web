import React, { useState } from "react";
import CafeIcon from "../assets/icons/CafeIcon";
import FoodIcon from "../assets/icons/FoodIcon";
import GameIcon from "../assets/icons/GameIcon";
import MusicIcon from "../assets/icons/MusicIcon";
import SportIconTennis from "../assets/icons/SportIconTennis";
import TravelIcon from "../assets/icons/TravelIcon";

export default function TestPage() {
  const [isSelectFood, setIsSelectFood] = useState(false);
  const [isSelectSport, setIsSelectSport] = useState(false);
  const [isSelectCafe, setIsSelectCafe] = useState(false);
  const [isSelectParty, setIsSelectParty] = useState(false);
  const [isSelectGame, setIsSelectGame] = useState(false);
  const [isSelectTravel, setIsSelectTravel] = useState(false);

  const handleSelectFood = () => {
    setIsSelectFood(!isSelectFood);
  };
  const handleSelectSport = () => {
    setIsSelectSport(!isSelectSport);
  };
  const handleSelectCafe = () => {
    setIsSelectCafe(!isSelectCafe);
  };
  const handleSelectParty = () => {
    setIsSelectParty(!isSelectParty);
  };
  const handleSelectGame = () => {
    setIsSelectGame(!isSelectGame);
  };
  const handleSelectTravel = () => {
    setIsSelectTravel(!isSelectTravel);
  };

  return (
    <div className="flex flex-col bg-white p-2 shadow-md w-[35%] m-auto rounded-bl-lg">
      <button
        className={`flex gap-2 items-end rounded-md p-1 ${isSelectFood ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectFood}
      >
        <div>
          <FoodIcon size="40px" />
        </div>
        <div className="font-bold text-lg">Food</div>
      </button>
      <button
        className={`flex gap-2 items-center rounded-md p-1 ${isSelectSport ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectSport}
      >
        <div>
          <SportIconTennis size="40px" />
        </div>
        <div className="font-bold text-lg">Sport</div>
      </button>
      <button
        className={`flex gap-2 items-center rounded-md p-1 ${isSelectCafe ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectCafe}
      >
        <div>
          <CafeIcon size="40px" />
        </div>
        <div className="font-bold text-lg">Cafe</div>
      </button>
      <button
        className={`flex gap-2 items-center rounded-md p-1 ${isSelectParty ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectParty}
      >
        <div>
          <MusicIcon size="40px" />
        </div>
        <div className="font-bold text-lg">Party</div>
      </button>
      <button
        className={`flex gap-2 items-center rounded-md p-1 ${isSelectGame ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectGame}
      >
        <div>
          <GameIcon size="40px" />
        </div>
        <div className="font-bold text-lg">Game</div>
      </button>
      <button
        className={`flex gap-2 items-center rounded-md p-1 ${isSelectTravel ? "bg-[#EEEEEE]" : ""}`}
        onClick={handleSelectTravel}
      >
        <div>
          <TravelIcon size="40px" />
        </div>
        <div className="font-bold text-lg">Travel</div>
      </button>
      <div className="flex justify-center py-2">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 rounded-full font-bold text-white w-[90%]">
          Select
        </button>
      </div>
    </div>
  );
}
