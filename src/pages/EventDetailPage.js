import { useNavigate } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";
import Post from "../features/post/Post";
import PostEventDetail from "../features/post/PostEventDetail";
import Header from "../layouts/Header";
import Dot from "../assets/icons/Dot";

export default function EventDetailPage({ title }) {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="เหงาจังอยากกินหมาล่า.."
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
          JOIN US
        </button>
      </div>
    </>
  );
}
