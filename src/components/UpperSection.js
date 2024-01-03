import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";

const UpperSection = () => {
  const navigate = useNavigate();

  // Function to navigate back to the Directory Page using useNavigate
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-14 mx-8 mt-4 flex justify-between flex-col lg:flex-row">
      {/* Button to navigate back to Directory Page */}
      <button
        className="p-2 my-2 lg:mx-3 bg-blue-100 font-semibold w-20 rounded-lg shadow-lg border border-black"
        onClick={handleNavigate}
      >
        BACK
      </button>
      {/* Component to display the Timezone dropdown */}
      <DropDown />
    </div>
  );
};

export default UpperSection;
