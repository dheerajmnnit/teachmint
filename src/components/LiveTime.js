import { useEffect, useState } from "react";

const LiveTime = ({ selectedZone }) => {
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(new Date());
  const [pause, setPause] = useState(false);

  const pauseHandler = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let timer;
    if (!pause) {
      timer = setInterval(() => {
        setTime(prevTime => {
          const newTime = new Date(prevTime.getTime());
          newTime.setSeconds(newTime.getSeconds() + 1);
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [pause]);

  const formattedDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: selectedZone })
  );

  return (
    <div className="flex w-auto mb-2 mt-4 lg:my-0">
      <div className="mx-4 lg:-mt-2 bg-cool-gray-200 text-blue-500">
        <h1 className="text-center tabular-nums font-custom">
          {formattedDate.toDateString()}
        </h1>
        <h1 className="text-2xl text-center tabular-nums font-custom">
          {formattedDate.toLocaleTimeString("en-US", {
            timeZone: selectedZone,
          })}
        </h1>
      </div>
      <button
        className="w-14 bg-green-100 rounded-lg shadow-lg font-semibold border border-black"
        onClick={pauseHandler}
      >
        {pause ? "Start" : "Pause"}
      </button>
    </div>
  );
};

export default LiveTime;
