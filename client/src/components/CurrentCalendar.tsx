"use client";

import { useEffect, useState } from "react";

export default function CurrentCalendar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-5">
      <div className="bg-white p-8 rounded-xl shadow-xl text-gray-800">
        <p className="text-xl">
          {currentTime.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-3xl font-mono mt-4">
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </section>
  );
}
