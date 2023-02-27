import Post from "../features/post/Post";
import PostNoti from "../features/post/PostNoti";

export default function NotificationsPage() {
  return (
    <>
      <div>
        <h1>Notifications</h1>
      </div>
      <Post>
        <PostNoti />
      </Post>
    </>
  );
}
