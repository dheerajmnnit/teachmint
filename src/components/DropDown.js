import { useSelector } from "react-redux";
import { useState } from "react";
import LiveTime from "./LiveTime";

const DropDown = () => {
  // Get the timezone list from Redux store or use an empty array if it's not available
  const timezoneList = useSelector((store) => store.timezone?.timezoneList) || [];

  // Set up state for the selected time zone, defaulting to the first zone in the list
  const [selectedZone, setSelectedZone] = useState(timezoneList[0] || "");

  // Handle the change event when a different time zone is selected from the dropdown
  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
  };

  return (
    <div className="lg:p-2 flex flex-col lg:flex-row my-2 lg:my-0">
      <div>
        {/* Dropdown select for time zones */}
        <select
          className="border border-black p-2 rounded-lg lg:w-80 w-auto shadow-lg"
          value={selectedZone}
          onChange={handleZoneChange}
        >
          {/* Map through the time zone list and create options for the dropdown */}
          {timezoneList.map((zone) => (
            <option className="w-64" key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>
      {/* Display the time section component based on the selected time zone */}
      <LiveTime selectedZone={selectedZone} />
    </div>
  );
};

export default DropDown;
