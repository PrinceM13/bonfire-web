import PostNoti from "./PostNoti";

export default function Post() {
  return (
    <div>
      <div className="grid p-2 w-full bg-white rounded-lg shadow-lg content-center opacity-80">
        <div className="border-[3px] p-4 border-black rounded-lg">
          <PostNoti />
        </div>
      </div>
    </div>
  );
}
