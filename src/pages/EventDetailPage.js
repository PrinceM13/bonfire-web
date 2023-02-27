import Post from "../features/post/Post";
import PostEventDetail from "../features/post/PostEventDetail";

export default function EventDetailPage() {
  return (
    <>
      <div>
        <h1>Event detail Page</h1>
      </div>
      <Post>
        <PostEventDetail />
      </Post>
    </>
  );
}
