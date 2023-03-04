import { useDispatch } from "react-redux";
import { logout } from "../redux/auth-slice";

export default function SettingPage() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-white opacity-80 p-4 pb-0">
        <button className="flex justify-between border-b-2 border-black font-bold p-4 text-lg w-[100%]">
          Account
        </button>
      </div>
      <div className="bg-white opacity-80 p-4 pb-0">
        <button
          className="flex justify-between border-b-2 border-black font-bold p-4 text-lg w-[100%]"
          onClick={() => dispatch(logout())}
        >
          Log out
        </button>
      </div>
    </>
  );
}
