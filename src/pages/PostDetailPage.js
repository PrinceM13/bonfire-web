import Post from "../features/post/Post";
import PostDetail from "../features/post/PostDetail";

export default function PostDetailPage() {
  return (
    <>
      <div>
        <h1>Post detail Page</h1>
      </div>
      <Post>
        <PostDetail />
      </Post>
    </>
  );
}
