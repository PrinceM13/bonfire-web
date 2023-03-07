import InsertPhotoIcon from "../../assets/icons/InsertPhotoIcon";

export default function ChatRoom({ event }) {
  const title = event?.Event.title;
  const date = event?.Event.EventDetail.date;
  const time = event?.Event.EventDetail.time;

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  const eventDateTime = new Date(date + "T" + time).toLocaleDateString("en-US", options);

  return (
    <div className="flex justify-between bg-white py-2 border-b-2 border-black px-4">
      <div className="flex items-center bg-[#ffffff] w-[15%]">
        <InsertPhotoIcon />
      </div>
      <div>
        <div className="font-bold text-[12px] text-[#333333]">{eventDateTime}</div>
        <div className="text-xl font-bold">{title}</div>
      </div>
      <div className="flex flex-col justify-between w-[8%]">
        <div className="font-bold text-xs">4m</div>
        <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
        <div className="rounded-full w-2 h-2 invisible"></div>
      </div>
    </div>
  );
}
