import AvatarDefault from "../assets/icons/avatarDefault";
import Post from "../features/post/Post";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <div className="flex">
        <AvatarDefault />
        <div className="flex flex-col">
          <h1>Name, 30</h1>
          <h2>@username</h2>
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
      <Post />
    </>
  );
}
