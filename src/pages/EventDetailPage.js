import { useNavigate, useParams } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import Post from "../features/post/Post";
import PostEventDetail from "../features/post/PostEventDetail";
import Header from "../layouts/Header";
import Dot from "../assets/icons/Dot";
import { useSelector } from "react-redux";

export default function EventDetailPage() {
  const eventFromId = useSelector((state) => state.event.eventFromId);
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  const navigate = useNavigate();
  const { eventId } = useParams();

  return (
    <>
      <Header
        title={eventFromId[eventId]?.title}
        leftBtn={
          <button onClick={() => navigate(-1)}>
            <BackIcon />
          </button>
        }
        rightBtn={
          <button>
            <Dot />
          </button>
        }
      />
      <Post>
        <PostEventDetail />
      </Post>
      <div className="flex justify-center items-center bg-white h-[8vh] px-4 bottom-[-1px] right-0 fixed w-full shadow-lg">
        <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-12 rounded-full font-bold text-white">
          {authenticatedUser.id !== eventFromId[eventId]?.userId ? "JOIN US" : "GO TO CHAT"}
        </button>
      </div>
    </>
  );
}
