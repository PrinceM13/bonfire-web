import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { setUser } from "../redux/auth-slice";
import * as userApi from "../api/user-api";
import AvatarDefault from "../assets/icons/avatarDefault";
import Post from "../features/post/Post";
import PostNoti from "../features/post/PostNoti";

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
      <div className="flex">
        <AvatarDefault />
        <div className="flex flex-col">
          <h1>{authenticatedUser?.firstName},24</h1>
          <h2>{authenticatedUser?.username}</h2>
          <Link to="/profile/:userId/edit">
            <button className="bg-white  shadow-md rounded-full ">Edit profile</button>
          </Link>
        </div>
      </div>
      <div>
        <h1>Bio</h1>
        <h1>Links</h1>
        <h1>Interest</h1>
      </div>
      <div className="flex ">
        <div className="border-b-4 w-1/2 text-center p-2 font-bold border-black">
          <button>Pending</button>
        </div>
        <div className="text-[#B8B7B7] w-1/2 text-center p-2 font-bold">
          <button>History</button>
        </div>
      </div>
      <Post>
        <PostNoti />
      </Post>
    </>
  );
}
