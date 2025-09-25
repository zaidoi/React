import { useOptimistic } from "react";

function LikeButton({ postId }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    0, // initial likes
    (state, newLike) => state + newLike // how to update
  );

  async function handleLike() {
    // instantly update UI
    addOptimisticLike(1);

    // then actually call server
    try {
      await fetch(`/api/like/${postId}`, { method: "POST" });
    } catch {
      // rollback if server fails
      addOptimisticLike(-1);
    }
  }

  return <button onClick={handleLike}>👍 {optimisticLikes}</button>;
}
