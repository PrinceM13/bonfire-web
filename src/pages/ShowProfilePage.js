// import AvatarDefault from "../assets/icons/avatarDefault";
import Avatar from "../components/Avatar";
import Post from "../features/post/Post";

export default function ShowProfilePage() {
  return (
    <>
      <div className="flex">
        <Avatar />
        <div className="flex flex-col">
          <h1>Name, 30</h1>
          <h2>@username</h2>
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
