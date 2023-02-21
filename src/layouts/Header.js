export default function Header({ content = "", leftBtn = "", rightBtn = "" }) {
  return (
    <div className="px-4 pt-[6vh] bg-green-200 h-[13vh] top-0 left-0 fixed w-full">
      {content === "" && (
        <div className="flex relative justify-between items-center gap-4">
          {leftBtn !== "" && <div className="px-2">{leftBtn}</div>}
          <div className="flex-col w-full ">
            <div className="text-center text-xl">Title</div>
            <div className="text-center text-xs">Sub Title</div>
          </div>
          {rightBtn !== "" && <div className="px-2">{rightBtn}</div>}
        </div>
      )}

      {content === "search" && (
        <div className="flex gap-4">
          <div className="flex grow">
            <div>P</div>
            <input className="w-full" />
          </div>
          <div className="w-1/6">
            <img src={"https://picsum.photos/200"} />
          </div>
        </div>
      )}
    </div>
  );
}
