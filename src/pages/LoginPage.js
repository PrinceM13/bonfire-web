import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../assets/icons/bonfireLogo.svg";
import GoogleIcon from "../assets/icons/GoogleIcon";
import Background from "../components/background/Background";
import Modal from "../components/Modal";

import LoginForm from "../features/auth/LoginForm";
import MoreInfoForm from "../features/auth/MoreInfoForm";
import { loginWithGoogle } from "../redux/auth-slice";

export default function LoginPage() {
  const [googleToken, setGoogleToken] = useState(null);
  const [googleData, setGoogleData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const needMoreInfo = useSelector((state) => state.auth.needMoreInfo);

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => setGoogleToken(tokenResponse.access_token)
  });

  useEffect(() => {
    const fetchGoogleInfo = async () => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${googleToken}`
          }
        });
        const data = await res.json();
        setGoogleData(data);
      } catch (err) {
        console.error(err);
      }
    };
    googleToken && fetchGoogleInfo();
  }, [googleToken]);

  useEffect(() => {
    googleData &&
      dispatch(
        loginWithGoogle(
          googleData.email,
          googleData.sub,
          googleData.given_name,
          googleData.family_name
        )
      );
  }, [googleData]);

  useEffect(() => {
    needMoreInfo && setIsOpen(true);
  }, [needMoreInfo]);

  return (
    <>
      <Background bgColor="bg-[#F4EEE0]" />
      <div className="flex flex-col justify-center items-center mt-[13vh] gap-4">
        <div className="flex items-center">
          <img src={Logo} className="mx-auto" alt="logo" />
        </div>
        <h1 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 ">
          Welcome to Bonfire
        </h1>
        <h2 className="text-black text-center">Log in to continue</h2>

        <LoginForm />

        {/* Modal to get more info for 1st time google login */}

        <Modal
          title="Please enter to continue"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          alwaysOpen={true}
        >
          <MoreInfoForm />
        </Modal>

        <div
          onClick={googleLogin}
          className="bg-white mt-2 px-4 py-1.5 w-[90vw] shadow-md rounded-full flex justify-between cursor-pointer"
        >
          <div>
            <GoogleIcon />
          </div>
          <div className="flex items-center text-sm text-black">Login with Google</div>
          <div className="invisible">
            <GoogleIcon />
          </div>
        </div>
        <hr className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-[1.5px] rounded-full w-[90vw]  shadow-md" />
        <Link to="/register">
          <div className="mt-2 flex justify-center">
            <button className=" bg-gradient-to-r from-[#006567] to-[#94C1E8] p-2 rounded-full w-[90vw] text-white font-bold shadow-md">
              Sign Up
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
