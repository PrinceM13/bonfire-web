// import PostEventHome from "./PostEventHome";
import PostInfo from "./PostInfo";
// import PostPromotion from "./PostPromotion";
// import PostNoti from "./PostNoti";

export default function Post() {
  return (
    <div>
      <div className="grid p-2 w-full bg-white rounded-lg shadow-lg content-center ">
        <div className="border-[3px] p-4 border-black rounded-lg">
          {/* <PostEventHome /> */}
          <PostInfo />
          {/* <PostPromotion /> */}
          {/* <PostNoti /> */}
        </div>
      </div>
    </div>
  );
}
