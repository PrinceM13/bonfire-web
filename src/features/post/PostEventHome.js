import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import FoodSmallIcon from "../../assets/icons/FoodSmallIcon";
import PictureIcon from "../../assets/icons/PictureIcon";
import PinMapIcon from "../../assets/icons/PinMapIcon";
import TagIcon from "../../assets/icons/TagIcon";
import TimeIcon from "../../assets/icons/TimeIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import Avatar from "../../components/Avatar";
import { getAllEvents } from "../../redux/event-slice";
import Post from "./Post";
import * as eventApi from "../../api/event-api";
import socket from "../../config/socket";

export default function PostEventHome() {
  const dispatch = useDispatch();
  const Tag = ({ tagTitle }) => (
    <div className="text-[10px] bg-[#D4D4D4] rounded-full px-2">{tagTitle}</div>
  );

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const navigate = useNavigate();
  const showEvents = useSelector((state) => state.event.events);

  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  const tagSearch = useSelector((state) => state.filter.tagSearch);

  const optionsDate = {
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit"
  };

  const handleJoinUsClick = async (e, eventId) => {
    e.stopPropagation();
    await eventApi.createEventUser({ eventId });
    socket.emit("joinRoom", `${eventId}`);
    navigate(`/chat/${eventId}`);
  };

  return (
    <>
      {showEvents?.map((el) => {
        return (
          (tagSearch === "" ||
            el.EventDetail.EventTags.some((tag) =>
              tag.Tag.titleTag.toLowerCase().includes(tagSearch.toLowerCase())
            )) && (
            <div
              key={el.id}
              className="cursor-pointer"
              onClick={() => {
                navigate(`/events/${el.id}`);
              }}
            >
              <Post>
                <div>
                  <div className="pt-4 px-4">
                    <div className="flex justify-items-start">
                      <h1 className="font-bold text-2xl">{el.title}</h1>
                    </div>

                    <div className="flex justify-between">
                      <div className="py-2 w-[80%]">
                        <div className="flex gap-2">
                          <div className="flex flex-col">
                            <div className="flex items-center justify-center h-6">
                              <PinMapIcon size="20px" />
                            </div>
                            <div className="flex items-center justify-center h-6">
                              <FoodSmallIcon size="20px" />
                            </div>
                            <div className="flex items-center justify-center h-6">
                              <TagIcon size="20px" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-sm h-6 flex items-center">
                              <p className="whitespace-nowrap truncate w-[25%]">
                                {el.EventDetail?.location}
                              </p>
                            </div>
                            <div className="text-sm h-6 flex items-center w-full">
                              <p className="">{el.EventDetail?.category}</p>
                            </div>
                            <div className="flex flex-wrap gap-1 pt-1 drop-shadow-md">
                              {el.EventDetail.EventTags.map((item) => (
                                <Tag key={item.Tag.id} tagTitle={`#${item.Tag?.titleTag}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[25%]">
                        <div className="">
                          <Avatar src={el.User.profileImage} size="100%" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#E5E5E5] flex justify-center items-center rounded-lg drop-shadow-lg">
                    <div className="">
                      {/* <PictureIcon size="100%" /> */}
                      <img src={el.EventDetail?.image} alt="" className="rounded-lg" />
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="py-4 flex justify-between">
                      <div className="flex gap-2 w-[45%]">
                        <div className="flex flex-col">
                          <div className="h-6 flex items-center justify-center">
                            <CalendarIcon size="20px" />
                          </div>
                          <div className="h-6 flex items-center justify-center">
                            <TimeIcon size="20px" />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-xs h-6 flex items-center">
                            {new Date(el.EventDetail?.date).toLocaleDateString(
                              "en-US",
                              optionsDate
                            )}
                          </div>
                          <div className="flex flex-wrap">
                            <div className="text-xs h-6 flex items-center">
                              {new Date(
                                el.EventDetail?.date + "T" + el.EventDetail?.time
                              ).toLocaleTimeString("en-US", { timeStyle: "short" })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]">
                        <div className="flex gap-2">
                          <div className="flex items-center">
                            <UserGroupIcon size="20px" />
                          </div>
                          <div className="flex flex-wrap text-xs">
                            <div className="h-6 flex items-center">
                              {el.EventDetail?.Rule?.paticipant
                                ? `${el.EventUsers.reduce((acc, el) => {
                                    if (el.status === "JOINED") {
                                      acc += 1;
                                    }
                                    return acc;
                                  }, 0)}/${el.EventDetail.Rule?.paticipant} going,`
                                : "Unlimit"}
                            </div>
                            <div className="h-6 flex items-center">{`${el.EventUsers.reduce(
                              (acc, el) => {
                                if (el.status === "INTERESTED") {
                                  acc += 1;
                                }
                                return acc;
                              },
                              0
                            )} interested`}</div>
                          </div>
                        </div>
                        {/* {authenticatedUser.id !== el.userId && ( */}
                        {/* <div> */}
                        {authenticatedUser.id !== el.userId &&
                          (el.EventUsers.filter((el) => el.userId === authenticatedUser.id)
                            .length !== 0 ? (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/chat/${el.id}`);
                              }}
                              className="bg-gradient-to-b from-[#EB4E53] w-[90%] to-[#e8d294] p-[2px] mt-1 rounded-full font-bold text-white text-center text-sm drop-shadow-md"
                            >
                              GO TO CHAT
                            </div>
                          ) : (
                            <div
                              onClick={(e) => handleJoinUsClick(e, el.id)}
                              className="bg-gradient-to-b from-[#006567] w-[90%] to-[#94C1E8] p-[2px] mt-1 rounded-full font-bold text-white text-center text-sm drop-shadow-md"
                            >
                              JOIN US
                            </div>
                          ))}
                        {/* </div> */}
                        {/* )} */}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#E5E5E5] rounded-lg drop-shadow-lg p-4 text-sm">
                    <p>{el.EventDetail?.detail}</p>
                  </div>
                </div>
              </Post>
            </div>
          )
        );
      })}
    </>
  );
}
