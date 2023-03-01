import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import FoodSmallIcon from "../../assets/icons/FoodSmallIcon";
import PictureIcon from "../../assets/icons/PictureIcon";
import PinMapIcon from "../../assets/icons/PinMapIcon";
import TagIcon from "../../assets/icons/TagIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import UserIcon from "../../assets/icons/UserIcon";
import { getAllEvents } from "../../redux/event-slice";
import Post from "./Post";

export default function PostEventHome({ size }) {
  const dispatch = useDispatch();
  const numberOfOnGoing = "3/5";
  const numberOfInterested = "159";
  const tag = (tagTitle) => (
    <div className="text-[10px] bg-[#D4D4D4] rounded-full px-2">{tagTitle}</div>
  );

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const showEvents = useSelector((state) => state.event.events);

  return (
    <>
      {showEvents?.map((el) => {
        return (
          <Post>
            <div className="bg-[#ffffffaa]">
              <div className="flex justify-items-start">
                <h1 className="font-bold text-2xl">{el.title}</h1>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-4 pt-4 ">
                    <div>
                      <PinMapIcon size="15px" />
                    </div>
                    <div className="text-sm">Mint Tower</div>
                  </div>
                  <div className="py-2">
                    <div className="flex gap-2">
                      <div>
                        <FoodSmallIcon size="15px" />
                      </div>
                      <div className="text-sm">Food</div>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-4">
                    <div className="flex items-center">
                      <TagIcon size="15px" />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tag("#หม่าล่า")}
                      {tag("#เม้ามอย")}
                      {tag("#หาเพื่อนกิน")}
                    </div>
                  </div>
                </div>
                <div className="w-[25%]">
                  <div className="py-4">
                    <UserIcon size="100%" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#D4D4D4] ">
                <div className="w-[25%] py-10">
                  <PictureIcon size="100%" />
                </div>
              </div>
              <div className="py-4 flex justify-between">
                <div className="w-[40%]">
                  <div className="flex gap-2 py-1">
                    <div>
                      <CalendarIcon size="15px" />
                    </div>
                    <div className="text-xs">{el.EventDetail?.date}</div>
                  </div>
                  <div className="flex gap-2 py-1 flex-wrap">
                    <div className="flex items-center">
                      <TimeIcon size="15px" />
                    </div>
                    <div className="text-xs">{el.EventDetail?.time}</div>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <UserGroupIcon size="15px" />
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm">
                      <div>{`${numberOfOnGoing} going,`}</div>
                      <div>{`${numberOfInterested} interested`}</div>
                    </div>
                  </div>
                  <div>
                    <Link to="/chat">
                      <button className="bg-gradient-to-b from-[#006567] w-full to-[#94C1E8] p-1 px-2 rounded-full mt-2 font-bold text-white">
                        JOIN US
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-black border-2 p-4 rounded-lg text-sm">
                <p>{el.EventDetail?.detail}</p>
              </div>
            </div>
          </Post>
        );
      })}
    </>
  );
}
