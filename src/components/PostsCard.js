import PostPopUp from "./PostPopUp";
import { useState } from "react";

const PostsCard = ({ posts }) => {
  // State variables to manage the visibility and postId for the post popup
  const [isVisible, setIsVisible] = useState(false);
  const [postId, setPostId] = useState(null);

  // Function to close the post popup
  const onClose = () => {
    setIsVisible(false);
  };

  // Function to handle opening the post popup with the specified postId
  const handlePopUp = (id) => {
    setPostId(id);
    setIsVisible(true);
  };

  // Render posts in a grid layout, each clickable to open the post popup
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 p-4 mx-4">
      {posts.map((post) => (
        <div
          onClick={() => handlePopUp(post?.id)} // Open post popup on click
          key={post?.id}
          className="border border-black p-2 shadow-lg bg-white-200 rounded-lg hover:cursor-pointer w-auto"
        >
          {/* Display post title and body */}
          <h3 className="font-semibold underline text-sm">{post?.title}</h3>
          <h3 className="text-sm truncate">{post?.body.length > 100 ? `${post?.body.slice(0, 100)}...` : post?.body}</h3>
        </div>
      ))}
      {/* Pass state and functions to handle post popup */}
      <PostPopUp onClose={onClose} isVisible={isVisible} postId={postId} />
    </div>
  );
};

export default PostsCard;
