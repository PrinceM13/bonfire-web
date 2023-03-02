import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { setUser } from "../redux/auth-slice";
import * as userApi from "../api/user-api";
import Avatar from "../components/Avatar";
import Post from "../features/post/Post";
import PostNoti from "../features/post/PostNoti";
// import UserIcon from "../assets/icons/UserIcon";
// import FacebookIcon from "../assets/icons/FacebookIcon";

export default function ProfilePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getMyProfile();
        dispatch(setUser(res.data.myProfile));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between">
          <div className="w-[30vw]">
            <Avatar src={authenticatedUser.profileImage} size="100%" />
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl">{authenticatedUser?.firstName},24</div>
            <div className="text-[#333333]">{authenticatedUser?.username}</div>
            <Link to="/profile/:userId/edit">
              <button className="mt-2 bg-gradient-to-b from-[#ffffff] to-[#D4D4D4] p-1 px-2 shadow-md rounded-full ">
                Edit profile
              </button>
            </Link>
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
