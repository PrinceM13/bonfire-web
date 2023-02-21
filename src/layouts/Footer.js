export default function Footer({ content = "" }) {
  return (
    <div className="flex justify-between items-center bg-pink-200 h-[8vh] px-4 bottom-0 right-0 fixed w-full">
      {content === "" && (
        <>
          <div>H</div>
          <div>D</div>
          <div>E</div>
          <div>N</div>
          <div>C</div>
        </>
      )}

      {content === "chat" && (
        <>
          <div className="flex gap-4">
            <div className="w-1/6">
              <img src={"https://picsum.photos/200"} />
            </div>
            <div className="flex items-center grow py-2 px-4 relative bg-white border border-purple-600 rounded-full">
              <input className="w-full" />
              <div className=" right-2 top-2">
                <button>Send</button>
              </div>
            </div>
          </div>
        </>
      )}

      {content === "joinUs" && (
        <>
          <div className="flex grow justify-center">
            <button className="bg-green-200">JOIN US</button>
          </div>
        </>
      )}
    </div>
  );
}
