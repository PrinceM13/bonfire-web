import InsertPhotoIcon from "../../assets/icons/InsertPhotoIcon";

export default function PostNoti({ event }) {
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
    <div className="flex justify-between bg-[#ffffffbb] py-4  px-[4vh] shadow-lg">
      <div className="flex justify-between gap-[8vh] ">
        <div className="flex items-center ">
          <InsertPhotoIcon />
        </div>
        <div>
          <div className="font-bold text-xs text-[#333333]">{eventDateTime}</div>
          <div className="text-xl font-normal">{title}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-[8%]">
        <div className="font-bold text-xs">4m</div>
        <div className="bg-[#EB4E53] rounded-full w-2 h-2"></div>
        <div className="rounded-full w-2 h-2 invisible"></div>
      </div>
    </div>
  );
}
