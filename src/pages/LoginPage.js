import Logo from "../assets/icons/bonfireLogo.svg";
import GoogleIcon from "../assets/icons/GoogleIcon";

import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[13vh] gap-4">
        <div className="flex items-center">
          <img src={Logo} className="mx-auto" alt="logo" />
        </div>
        <h1 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 ">
          Welcome to Bonfire
        </h1>
        <h2 className="text-black text-center">Log in to continue</h2>

        <LoginForm />
        <div className="bg-white mt-2 px-4 py-1.5 w-[90vw] shadow-md rounded-full flex justify-between ">
          <div>
            <GoogleIcon />
          </div>
          <button className=" text-sm  text-black ">Sign Up with Google</button>
          <div className="invisible">
            <GoogleIcon />
          </div>
        </div>
        <hr className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-[1.5px] rounded-full w-[90vw]  shadow-md" />
        <div className="mt-2 flex justify-center">
          <button className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
