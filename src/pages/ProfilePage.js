import Post from "../features/post/Post";
import { Link } from "react-router-dom";
import PostNoti from "../features/post/PostNoti";
// import UserIcon from "../assets/icons/UserIcon";
import Avatar from "../components/Avatar";
// import FacebookIcon from "../assets/icons/FacebookIcon";

export default function ProfilePage() {
  // const tag = (tagTitle) => (
  //   <div className="text-[10px] bg-[#FFFFFF] rounded-full px-2">{tagTitle}</div>
  // );
  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between">
          <div className="w-[30vw]">
            <Avatar size="100%" />
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl">Name, 30</div>
            <div className="text-[#333333]">@username</div>
            <Link to="/profile/:userId/edit">
              <button className="mt-2 bg-gradient-to-b from-[#ffffff] to-[#D4D4D4] p-1 px-2 shadow-md rounded-full ">
                Edit profile
              </button>
            </Link>

            {/* <div className="w-[5vw] py-2">
              <FacebookIcon size="100%" />
            </div> */}
            {/* <div className="flex flex-wrap gap-1">
              {tag("#หม่าล่า")}
              {tag("#แบดมินตัน")}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Bio</div>
          <div className="font-bold">Links</div>
          {/* <div className="font-bold">Interest</div> */}
        </div>
        <div className="flex ">
          <div className="border-b-4 w-1/2 text-center p-2 font-bold border-black">
            <button>Pending</button>
          </div>
          <div className="text-[#B8B7B7] w-1/2 text-center p-2 font-bold">
            <button>History</button>
          </div>
        </div>
      </div>
      <Post>
        <PostNoti />
      </Post>
    </>
  );
}
