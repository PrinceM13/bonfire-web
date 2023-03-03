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
            <div className="flex items-end font-medium text-sm ml-2">Distance</div>
          </div>
        </button>
        <button className="w-1/3">
          <div className="flex justify-center">
            <CalendarIcon />
            <div className="flex items-end font-medium text-sm ml-2">Calendar</div>
          </div>
        </button>
        <button className="w-1/3">
          <div className="flex justify-center">
            <FilterIcon />
            <div className="flex items-end font-medium text-sm ml-2">Categories</div>
          </div>
        </button>
      </div>
    </>
  );
}
