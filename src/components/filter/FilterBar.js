import { useState } from "react";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import CalendarIconActive from "../../assets/icons/CalendarIconActive";
import FilterIcon from "../../assets/icons/FilterIcon";
import FilterIconActive from "../../assets/icons/FilterIconActive";
import PinIcon from "../../assets/icons/PinIcon";
import PinIconActive from "../../assets/icons/PinIconActive";

export default function FilterBar() {
  const [isDistanceActive, setIsDistanceActive] = useState(false);
  const [isCalendarActive, setIsCalendarActive] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  const handleDistanceClick = () => {
    setIsDistanceActive(!isDistanceActive);
    setIsCalendarActive(false);
    setIsCategoryActive(false);
  };

  const handleCalendarClick = () => {
    setIsCalendarActive(!isCalendarActive);
    setIsCategoryActive(false);
    setIsDistanceActive(false);
  };

  const handleCategoryClick = () => {
    setIsCategoryActive(!isCategoryActive);
    setIsCalendarActive(false);
    setIsDistanceActive(false);
  };

  return (
    <>
      <div className="flex items-start w-full bg-white fixed top-[13vh] left-0 h-[5vh] shadow-lg -z-10">
        <button
          className={`w-1/3 ${
            isDistanceActive ? "active:text-[#EB4E53] focus:text-[#EB4E53]" : ""
          } `}
          onClick={handleDistanceClick}
        >
          <div className="flex justify-center">
            {isDistanceActive ? <PinIconActive /> : <PinIcon />}
            <div className="flex items-end font-medium text-sm ml-2">Distance</div>
          </div>
        </button>

        <button
          className={`w-1/3 ${
            isCalendarActive ? "active:text-[#EB4E53] focus:text-[#EB4E53]" : ""
          } `}
          onClick={handleCalendarClick}
        >
          <div className="flex justify-center">
            {isCalendarActive ? <CalendarIconActive /> : <CalendarIcon />}
            <div className="flex items-end font-medium text-sm ml-2">Calendar</div>
          </div>
        </button>

        <button
          className={`w-1/3 ${
            isCategoryActive ? "active:text-[#EB4E53] focus:text-[#EB4E53]" : ""
          } `}
          onClick={handleCategoryClick}
        >
          <div className="flex justify-center">
            {isCategoryActive ? <FilterIconActive /> : <FilterIcon />}
            <div className="flex items-end font-medium text-sm ml-2">Categories</div>
          </div>
        </button>
      </div>
    </>
  );
}
