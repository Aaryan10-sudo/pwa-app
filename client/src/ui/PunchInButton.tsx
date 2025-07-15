"use client";
import React, { useState } from "react";
import PunchInIcon from "./icons/PunchInIcon";

const PunchInButton = () => {
  const [punchedIn, setPunchedIn] = useState(false);

  const handlePunch = () => {
    if (!punchedIn) {
      alert("⏱️ You punched in successfully!");
    }
    setPunchedIn((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePunch}
        className={`h-[200px] w-[200px] rounded-full text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 text-white ${
          punchedIn ? "bg-red-700 " : "bg-gradient-to-r from-gray-700 to-black"
        }`}
      >
        <PunchInIcon />
        {punchedIn ? "Punch Out" : "Punch In"}
      </button>
    </div>
  );
};

export default PunchInButton;
