import { Link, useLocation } from "react-router-dom";
import ChatIcon from "../assets/icons/ChatIcon";
import ChatIconCurrent from "../assets/icons/ChatIconCurrent";
import CreateEventIcon from "../assets/icons/CreateEventIcon";
import CreateEventIconCurrent from "../assets/icons/CreateEventIconCurrent";
import HomeIcon from "../assets/icons/HomeIcon";
import HomeIconCurrent from "../assets/icons/HomeIconCurrent";
import NotificationIcon from "../assets/icons/NotificationIcon";
import NotificationIconCurrent from "../assets/icons/NotificationIconCurrent";
import PromotionIcon from "../assets/icons/PromotionIcon";
import PromotionIconCurrent from "../assets/icons/PromotionIconCurrent";

export default function Footer({ content = "" }) {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center bg-white h-[8vh] px-5 bottom-[-1px] right-0 fixed w-full shadow-lg">
      {content === "" && (
        <>
          <Link to="/">{location.pathname === "/" ? <HomeIconCurrent /> : <HomeIcon />}</Link>
          <Link to="/promotions">
            {location.pathname === "/promotions" ? <PromotionIconCurrent /> : <PromotionIcon />}
          </Link>
          <Link to="/create-event">
            {location.pathname === "/create-event" ? (
              <CreateEventIconCurrent />
            ) : (
              <CreateEventIcon />
            )}
          </Link>
          <Link to="/notifications">
            {location.pathname === "/notifications" ? (
              <NotificationIconCurrent />
            ) : (
              <NotificationIcon />
            )}
          </Link>
          <Link to="/chatroom">
            {location.pathname === "/chatroom" ? <ChatIconCurrent /> : <ChatIcon />}
          </Link>
        </>
      )}

      {content === "joinUs" && (
        <>
          <div className="flex grow justify-center">
            <div>
              <button className="bg-gradient-to-b from-[#006567] to-[#94C1E8] p-1 px-12 rounded-full font-bold text-white">
                JOIN US
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
