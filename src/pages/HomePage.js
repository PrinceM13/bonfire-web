import Post from "../features/post/Post";
import PostEventHome from "../features/post/PostEventHome";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>HomePage</h1>
      </div>
      <Post>
        <PostEventHome />
      </Post>
      <Post>
        <PostEventHome />
      </Post>
    </>
  );
}
