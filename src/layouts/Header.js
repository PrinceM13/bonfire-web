import MagnifyingGlassIcon from "../assets/icons/MagnifyingGlassIcon";

export default function Header({ content = "", title = "title", leftBtn = "", rightBtn = "" }) {
  return (
    <div className="px-4 pt-[6vh] bg-white h-[13vh] top-0 left-0 fixed w-full shadow-lg">
      {content === "" && (
        <div className="flex relative justify-between items-center gap-4">
          <div className={`px-2 ${leftBtn === "" ? "invisible" : ""}`}>
            {leftBtn === "" ? rightBtn : leftBtn}
          </div>
          <div className="flex-col w-full ">
            <div className="text-center text-xl">{title}</div>
            {/* <div className="text-center text-xs">Sub Title</div> */}
          </div>
          <div className={`px-2 ${rightBtn === "" ? "invisible" : ""}`}>
            {rightBtn === "" ? leftBtn : rightBtn}
          </div>
        </div>
      )}

      {content === "search" && (
        <>
          <div className=""></div>
          <div className="px-6 pt-[6vh] bg-white h-[13vh] top-0 left-0 fixed w-full shadow-lg flex">
            <div className="py-1 w-full">
              <div className="flex items-center gap-4">
                <div className="border-[2px] border-gray-500 bg-white px-4 py-1.5 w-full shadow-md rounded-full flex justify-between">
                  <div className="flex items-center">
                    <MagnifyingGlassIcon />
                  </div>
                  <input className="w-full" />
                </div>

                <div className="w-[45px]">
                  <img src={"https://picsum.photos/200"} className="rounded-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {content === "edit" && (
        <div className="flex relative justify-between items-center gap-4">
          <div className={`px-2 ${leftBtn === "" ? "invisible" : ""}`}>
            {leftBtn === "Cancel" ? rightBtn : leftBtn}
          </div>
          <div className="flex-col w-full ">
            <div className="text-center text-xl">Title</div>
          </div>
          <div className={`px-2 ${rightBtn === "" ? "invisible" : ""}`}>
            {rightBtn === "Done" ? leftBtn : rightBtn}
          </div>
        </div>
      )}
    </div>
  );
}
