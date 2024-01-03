import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetPostsData } from "../hooks/useGetPostsData";
import { useGetUsersData } from "../hooks/useGetUsersData";
import { useGetTimeZone } from "../hooks/useGetTimeZone";
import Loader from "./Loader";
import PostsCard from "./PostsCard";
import ProfileSection from "./ProfileSection";
import UpperSection from "./UpperSection";

const ProfilePage = () => {
  // Call custom hooks to fetch data
  useGetTimeZone();
  useGetUsersData();
  useGetPostsData();

  const { id } = useParams(); // Get the user-specific ID from URL params

  // Get usersList, postsList, and timezoneList from Redux store
  const usersList = useSelector((store) => store.usersData?.usersList);
  const postsList = useSelector((store) => store.usersData?.postsList);
  const timezoneList = useSelector((store) => store.timezone?.timezoneList);

  // Return loader if any of the lists are empty
  if (!usersList || !postsList || !timezoneList) return <Loader />;

  // Get specific user by ID
  const user = usersList.find((user) => user?.id === parseInt(id));
  // Get user-specific posts by ID
  const userPosts = postsList.filter((post) => post?.userId === parseInt(id));

  return (
    <>
      {/* Dividing the page into 3 sections */}
      <UpperSection />
      {/* Display user profile information */}
      <ProfileSection user={user} />
      {/* Display user-specific posts */}
      <PostsCard posts={userPosts} />
    </>
  );
};

export default ProfilePage;
