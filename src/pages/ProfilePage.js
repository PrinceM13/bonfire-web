import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as userApi from "../api/user-api";
import Avatar from "../components/Avatar";
import Post from "../features/post/Post";
import PostNoti from "../features/post/PostNoti";
// import UserIcon from "../assets/icons/UserIcon";
// import FacebookIcon from "../assets/icons/FacebookIcon";

export default function ProfilePage() {
  const param = useParams();
  const navigate = useNavigate();
  const authenticatedUser = useSelector((state) => state.auth.authenticatedUser);
  console.log(authenticatedUser);

  const userId = +param.userId;
  const [profile, setProfile] = useState({});

  const currentDate = new Date().getFullYear();
  const birthDate = new Date(profile.birthDate).getFullYear();
  const age = currentDate - birthDate;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getProfileById(userId);
        if (res.data.profile) {
          setProfile(res.data.profile);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between">
          <div className="w-[30vw]">
            <Avatar src={profile.profileImage} size="100%" />
          </div>
          <div className="p-4">
            <div className="font-bold text-2xl">
              {profile?.firstName}, {age}
            </div>
            <div className="text-[#333333]">{profile?.username}</div>
            {authenticatedUser.id === userId && (
              <Link to="/profile/:userId/edit">
                <button className="mt-2 bg-gradient-to-b from-[#ffffff] to-[#D4D4D4] p-1 px-2 shadow-md rounded-full ">
                  Edit profile
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="font-bold">Bio&nbsp;:&nbsp;&nbsp;</div>
            <div className="w-full">
              <span>{authenticatedUser.bio}</span>
            </div>
          </div>
          <div className="flex">
            <div className="font-bold">Links&nbsp;:&nbsp;&nbsp;</div>
            <div className="w-full">
              <span>{authenticatedUser.bio}</span>
            </div>
          </div>
          {/* <div className="font-bold">Interest</div> */}
        </div>
        <div className="flex ">
          <div className="border-b-4 w-1/2 text-center p-2 font-bold border-black">
            <button>Host</button>
          </div>
          <div className="text-[#B8B7B7] w-1/2 text-center p-2 font-bold">
            <button>Joined</button>
          </div>
        </div>
      </div>
      <Post>
        <PostNoti />
      </Post>
    </>
  );
}
