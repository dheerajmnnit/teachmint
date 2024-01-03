import { useGetUsersData } from "../hooks/useGetUsersData";
import { useGetPostsData } from "../hooks/useGetPostsData";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { Link } from "react-router-dom";

// Helper function to get user posts by userId
const getUserPosts = (postsList, userId) => {
  return postsList.filter((post) => post?.userId === userId);
};

const Directory = () => {
  // Custom hooks to fetch user and post data
  useGetUsersData();
  useGetPostsData();

  // Fetching user and post lists from Redux store
  const usersList = useSelector((store) => store.usersData?.usersList);
  const postsList = useSelector((store) => store.usersData?.postsList);

  // Display loader if user or post lists are empty or undefined
  if (!usersList || !postsList) return <Loader />;

  return (
    <div>
      {/* Directory Title */}
      <h1 className="text-center my-2 mx-2 p-1 text-2xl font-semibold underline">
        Directory
      </h1>
      <div>
        {/* Displaying users with their posts */}
        {usersList.map(({ id, name }) => {
          // Filtering posts for each user
          const userPosts = getUserPosts(postsList, id);

          return (
            // Link to individual user profile
            <Link to={`/user/${id}`} key={id}>
              {/* User card displaying name and post count */}
              <div className="w-auto border border-black m-2 p-2 text-lg font-medium rounded-lg flex justify-between bg-blue-100 hover:cursor-pointer">
                <h3 className="mx-2">Name: {name}</h3>
                <h3 className="mx-2">Posts: {userPosts.length}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Directory;
