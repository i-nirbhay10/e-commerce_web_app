import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Formats time based on locale
  };

  return (
    // <div className="flex flex-col items-center justify-center  bg-gray-100">
    //   <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
    //     <h1 className="text-3xl font-bold mb-4">Digital Clock</h1>
    <p className="text-xl ml-2 font-mono">{formatTime(time)}</p>
    //   {/* </div>
    // </div> */}
  );
}

export default DigitalClock;
