const ProfileSection = ({ user }) => {
  // Render user profile data
  return (
    <div className="mx-4 p-4 rounded-lg mt-28 lg:my-0">
      <h1 className="text-center text-2xl font-semibold">Profile Page</h1>
      {/* Display user details in a bordered section */}
      <div className="border border-black h-auto w-auto rounded-lg flex justify-between mt-4 p-4">
        {/* Left column for personal information */}
        <div className="flex flex-col items-start p-1 m-1">
          {/* Display user name */}
          <h3 className="p-1 font-medium text-base">
            <span className="underline">Name:</span> {user?.name}
          </h3>
          {/* Display username and catch phrase */}
          <h3 className="p-1 font-medium text-base mt-auto">
            <span className="underline">Username:</span> {user?.username} |{" "}
            <span className="underline">Catch Phrase:</span>{" "}
            {user?.company?.catchPhrase}
          </h3>
        </div>
        {/* Right column for address, email, and phone */}
        <div className="flex flex-col items-start p-1 m-1">
          {/* Display address information */}
          <h3 className="p-1 font-medium text-base">
            <span className="underline">Address:</span> {user?.address?.suite},{" "}
            {user?.address?.street}, {user?.address?.city},{" "}
            {user?.address?.zipcode}
          </h3>
          {/* Display email and phone */}
          <h3 className="p-1 font-medium text-base mt-auto">
            <span className="underline">Email:</span> {user?.email} |{" "}
            <span className="underline">Phone:</span> {user?.phone}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
