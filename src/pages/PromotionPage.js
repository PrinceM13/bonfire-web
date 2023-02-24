import Post from "../features/post/Post";
import PostPromotion from "../features/post/PostPromotion";

export default function PromotionsPage() {
  return (
    <>
      <div>
        <h1>Promotions</h1>
      </div>
      <Post>
        <PostPromotion />
      </Post>
    </>
  );
}
