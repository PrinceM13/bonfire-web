import CalendarIcon from "../../assets/icons/CalendarIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import PinIcon from "../../assets/icons/PinIcon";

export default function FilterBar() {
  return (
    <>
      <div className="flex items-start   w-full bg-white fixed top-[13vh] left-0 h-[5vh] shadow-lg -z-10">
        <button className="w-1/3">
          <div className="flex justify-center">
            <PinIcon />
            <span className="font-medium ml-2">Distance</span>
          </div>
        </button>
        <button className="w-1/3">
          <div className="flex justify-center">
            <CalendarIcon />
            <span className="font-medium ml-2">Calendar</span>
          </div>
        </button>
        <button className="w-1/3">
          <div className="flex justify-center">
            <FilterIcon />
            <span className="font-medium ml-2">Categories</span>
          </div>
        </button>
      </div>
    </>
  );
}
