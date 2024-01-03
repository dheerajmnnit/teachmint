import { useSelector } from "react-redux";

const PostPopUp = ({ onClose, isVisible, postId }) => {
  // Fetch the posts list from Redux store
  const postsList = useSelector((store) => store.usersData?.postsList);

  // If the popup is not visible, return null to hide it
  if (!isVisible) return null;

  // Logic to close the popup when clicking outside the box
  const handlePopUpClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  // Find the post with the matching postId
  const post = postsList.find((post) => post?.id === postId);

  // Render the popup if isVisible is true
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-none flex justify-center items-center"
      id="wrapper"
      onClick={handlePopUpClose}
    >
      <div className="border-2 border-black p-2 bg-green-100 rounded-lg lg:w-96 w-80">
        {/* Display post title and body */}
        <h3 className="font-semibold underline text-sm p-2">{post?.title}</h3>
        <h3 className="text-sm p-2">{post?.body}</h3>
      </div>
    </div>
  );
};

export default PostPopUp;
