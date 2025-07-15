"use client";

import React, { useEffect, useState } from "react";
import AttendanceInfo from "@/components/AttendanceInfo";
import CurrentCalendar from "@/components/CurrentCalendar";
import PunchInButton from "@/ui/PunchInButton";
import Loader from "@/components/Loader";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 1.5s fake load
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-[85vh] bg-slate-100 flex flex-col items-center justify-between text-center">
      <CurrentCalendar />
      <PunchInButton />
      <AttendanceInfo />
    </main>
  );
};

export default Page;
