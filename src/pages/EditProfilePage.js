import EditProfileForm from "../components/form/EditProfileForm";
import Post from "../features/post/Post";

export default function EditProfilePage() {
  return (
    <>
      <div className="px-4 pt-[6vh] bg-white h-[13vh] top-0 left-0 fixed z-50 w-full shadow-xl">
        <div className="flex justify-between">
          <button className="font-bold text-s">Cancel</button>
          <div className="font-bold text-xl">Edit profile</div>
          <button className="font-bold text-s">Done</button>
        </div>
      </div>

      <Post>
        <EditProfileForm />
      </Post>
    </>
  );
}
