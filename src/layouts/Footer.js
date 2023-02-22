import ChatIcon from "../assets/icons/ChatIcon";
import CreateEventIcon from "../assets/icons/CreateEventIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import InsertPhotoIcon from "../assets/icons/InsertPhotoIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import PromotionIcon from "../assets/icons/PromotionIcon";

export default function Footer({ content = "" }) {
  return (
    <div className="flex justify-between items-center bg-white h-[8vh] px-4 bottom-0 right-0 fixed w-full shadow-lg">
      {content === "" && (
        <>
          <div>
            <HomeIcon />
          </div>
          <div>
            <PromotionIcon />
          </div>
          <div>
            <CreateEventIcon />
          </div>
          <div>
            <NotificationIcon />
          </div>
          <div>
            <ChatIcon />
          </div>
        </>
      )}

      {content === "chat" && (
        <>
          <div className="flex gap-4 w-full ">
            <div className="flex items-center">
              <InsertPhotoIcon />
            </div>
            <div className="flex border-[2px] items-center grow py-2 px-4 relative bg-white  border-gray-500 rounded-full">
              <input className="w-full" />
              <div className=" right-2 top-2">
                <button className="font-bold">Send</button>
              </div>
            </div>
          </div>
        </>
      )}

      {content === "joinUs" && (
        <>
          <div className="flex grow justify-center">
            <button className="bg-white">JOIN US</button>
          </div>
        </>
      )}
    </div>
  );
}
