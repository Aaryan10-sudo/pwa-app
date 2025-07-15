"use client";

import React, { useState } from "react";

const AttendanceInfo: React.FC = () => {
  const [punchInTime, setPunchInTime] = useState<Date | null>(null);
  const [punchOutTime, setPunchOutTime] = useState<Date | null>(null);

  const formatTime = (date: Date | null): string =>
    date?.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) ?? "—";

  const calculateWorkingHours = (): string => {
    if (!punchInTime || !punchOutTime) return "—";

    const diffMs = punchOutTime.getTime() - punchInTime.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const handlePunchIn = (): void => {
    setPunchInTime(new Date());
    setPunchOutTime(null);
  };

  const handlePunchOut = (): void => {
    if (punchInTime) {
      setPunchOutTime(new Date());
    } else {
      alert("Please punch in first!");
    }
  };

  return (
    <div className="text-center flex justify-between gap-5 mb-5">
      <p>
        <span className="font-semibold">Punch In:</span>{" "}
        {formatTime(punchInTime)}
      </p>
      <p>
        <span className="font-semibold">Punch Out:</span>{" "}
        {formatTime(punchOutTime)}
      </p>
      <p>
        <span className="font-semibold">Working Hours:</span>{" "}
        {calculateWorkingHours()}
      </p>
    </div>
  );
};

export default AttendanceInfo;
