import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PinMapIcon from "../../assets/icons/PinMapIcon";
import UserGroupIcon from "../../assets/icons/UserGroupIcon";
import PictureIcon from "../../assets/icons/PictureIcon";
import Avatar from "../../components/Avatar";
import { getEventsById } from "../../redux/event-slice";

export default function PostEventDetail({ size }) {
  const eventFromId = useSelector((state) => state.event.eventFromId);
  const { eventId } = useParams();
  const navigate = useNavigate();

  const thisEvent = eventFromId[eventId];

  const dispatch = useDispatch();
  useEffect(() => {
    !thisEvent && dispatch(getEventsById(eventId)); // fetch data by id if refesh (refresh === events === no data)
  }, []);

  const date = thisEvent?.EventDetail.date;
  const time = thisEvent?.EventDetail.time;
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  const eventDateTime = new Date(date + "T" + time).toLocaleDateString("en-US", options);

  const location = thisEvent?.EventDetail.location;
  const username = thisEvent?.User.username;
  const detail = thisEvent?.EventDetail.detail;
  const numPaticipant = thisEvent?.EventDetail.Rule?.paticipant;
  const numGoing = thisEvent?.EventUsers.reduce((acc, el) => {
    if (el.status === "JOINED") {
      acc += 1;
    }
    return acc;
  }, 0);
  const numAvailable = numPaticipant - numGoing;
  const eventUsers = thisEvent?.EventUsers;

  const User = ({ userId, paticipantUsername, paticipantId, hostId, status }) => (
    <div
      onClick={() => navigate(`/profile/${userId}`)}
      className="flex flex-col pt-2 items-center px-2 w-[20%]"
    >
      <div>
        <Avatar size="100%" />
      </div>
      <div className="font-bold text-xs text-[#000000]">
        <div>{paticipantUsername}</div>
      </div>
      <div className=" text-xs text-[#000000] font-bold">
        <div>{paticipantId !== hostId ? status.slice(0, 5) + "..." : "HOST"}</div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-[#E5E5E5] flex justify-center items-center rounded-lg drop-shadow-lg">
        <div className="w-[25%] py-10">
          <img src={thisEvent?.EventDetail.image} className="w-[100%] h-[100%]" alt="Event " />
        </div>
      </div>
      <div className="px-2">
        <div className="flex justify-between">
          <div className="my-2">
            <div className="flex flex-wrap text-xs gap-1">
              <div>{eventDateTime}</div>
            </div>
          </div>
          <div className="text-xs my-2">
            <div>38 mins</div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div>
        <div className="flex gap-2 px-2 mb-[1px]">
          <div className="flex w-[5%] justify-center">
            <PinMapIcon size="20px" />
          </div>
          <div className="text-sm">{location}</div>
        </div>
        <div className="bg-[#E5E5E5] flex justify-center items-center rounded-lg drop-shadow-lg">
          <div className="w-[25%] py-10">
            <PictureIcon size="100%" />
          </div>
        </div>
      </div>
      {/* Map-end */}
      <div className="bg-[#E5E5E5] rounded-lg drop-shadow-lg p-4 text-sm">
        <p>{detail}</p>
      </div>
      <div className="px-2">
        <div className="flex gap-2 pt-1">
          <div className="flex items-center w-[5%]">
            <UserGroupIcon size="100%" />
          </div>
          <div className="flex flex-wrap gap-1 text-xs">
            {numPaticipant ? (
              <>
                <div>{`${numGoing}/${numPaticipant} going,`}</div>
                <div>{`${numAvailable} seate${numAvailable > 1 && "s"} available`}</div>
              </>
            ) : (
              <div>Unlimit</div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap">
          {eventUsers?.map((el) => (
            <User
              key={el.userId}
              userId={el.userId}
              paticipantUsername={el.User.username}
              paticipantId={el.userId}
              hostId={eventFromId[eventId]?.userId}
              status={el.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
