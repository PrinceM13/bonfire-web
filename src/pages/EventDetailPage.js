import { useNavigate, useParams } from "react-router-dom";

import BackIcon from "../assets/icons/BackIcon";
import Post from "../features/post/Post";
import PostEventDetail from "../features/post/PostEventDetail";
import Header from "../layouts/Header";
import Dot from "../assets/icons/Dot";
import { useDispatch, useSelector } from "react-redux";
import useClickOutSide from "../hook/useClickOutSide";
import { useEffect, useState } from "react";
import { deleteEvent, getAllEvents } from "../redux/event-slice";
import Modal from "../components/Modal";
import ButtonConfirm from "../components/ButtonConfirm";
import EditEvent from "../components/edit/EditEvent";
import * as eventApi from "../api/event-api";
import { timeSince } from "../utils/date-format";

export default function EventDetailPage() {
  const dispatch = useDispatch();
  const eventFromId = useSelector(state => state.event.eventFromId);
  const authenticatedUser = useSelector(state => state.auth.authenticatedUser);
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const dropdownEl = useClickOutSide(() => setOpenDropdown(false));
  const handleDeleteEvent = async () => {
    dispatch(deleteEvent(eventId));
    setIsConfirmDeleteOpen(false);
    navigate("/");
  };

  const [isEditEventOpen, setIsEditEventOpen] = useState(false);
  const [timePassed, setTimepassed] = useState();

  useEffect(() => {
    // !eventFromId[eventId] && navigate("/");
  }, [eventId]);

  useEffect(() => {
    setTimepassed(eventFromId[eventId]);
  }, [timePassed]);

  console.log(eventFromId[eventId]);

  const timeAgo = () => timeSince(timePassed?.createdAt);
  console.log(timeAgo);

  const isUserInterested = eventFromId[eventId]?.EventUsers.filter(
    el => el.userId === authenticatedUser.id
  ).length;

  const handleJoinUsClick = async () => {
    await eventApi.createEventUser({ eventId });
    dispatch(getAllEvents());
    navigate(`/chat/${eventId}`);
  };

  return (
    <>
      <Modal
        title="Delete Event !?"
        isOpen={isConfirmDeleteOpen}
        onClose={() => setIsConfirmDeleteOpen(false)}
      >
        <div className="flex justify-center gap-2">
          <div onClick={handleDeleteEvent}>
            <ButtonConfirm needSolid={true}>Yes</ButtonConfirm>
          </div>
          <div onClick={() => setIsConfirmDeleteOpen(false)}>
            <ButtonConfirm theme="danger" needSolid={true}>
              No
            </ButtonConfirm>
          </div>
        </div>
      </Modal>

      <Modal title="Edit Event" isOpen={isEditEventOpen} onClose={() => setIsEditEventOpen(false)}>
        <EditEvent
          eventId={eventId}
          onClose={() => setIsEditEventOpen(false)}
          eventFromId={eventFromId}
        />
      </Modal>

      <Header
        title={eventFromId[eventId]?.title}
        leftBtn={
          <button onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
        }
        rightBtn={
          <div ref={dropdownEl}>
            <div onClick={() => setOpenDropdown(!openDropdown)}>
              <Dot />
            </div>
            <div
              className={`absolute top-[7vh] -right-5 bg-white w-[25vh] rounded-bl-lg ${
                openDropdown ? "" : "hidden"
              }`}
            >
              <div
                className="px-4 py-2 text-lg border border-gray-500"
                onClick={() => {
                  setIsEditEventOpen(true);
                  setOpenDropdown(false);
                }}
              >
                Edit event
              </div>
              <div
                className="px-4 py-2 text-lg border border-gray-500 border-t-0 rounded-bl-lg"
                onClick={() => {
                  setIsConfirmDeleteOpen(true);
                  setOpenDropdown(false);
                }}
              >
                Delete Event
              </div>
            </div>
          </div>
        }
      />
      <Post>
        <PostEventDetail timeAgo={timeAgo} />
      </Post>
      <div className="flex justify-center items-center bg-white h-[8vh] px-4 bottom-[-1px] right-0 fixed w-full shadow-lg">
        {authenticatedUser.id !== eventFromId[eventId]?.userId ? (
          !isUserInterested ? (
            <button
              onClick={handleJoinUsClick}
              className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-12 rounded-full font-bold text-white"
            >
              {"JOIN US"}
            </button>
          ) : (
            <button
              onClick={() => navigate(`/chat/${eventId}`)}
              className="bg-gradient-to-b from-[#EB4E53] to-[#e8d294] p-1 px-12 rounded-full font-bold text-white"
            >
              {"GO TO CHAT"}
            </button>
          )
        ) : (
          <button
            onClick={() => navigate(`/chat/${eventId}`)}
            className="bg-gradient-to-b from-[#EB4E53] to-[#e8d294] p-1 px-12 rounded-full font-bold text-white"
          >
            {"GO TO CHAT"}
          </button>
        )}
      </div>
    </>
  );
}
