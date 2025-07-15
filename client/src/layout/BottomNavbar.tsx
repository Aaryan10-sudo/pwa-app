import HistoryIcon from "@/ui/icons/HistoryIcon";
import HomeIcon from "@/ui/icons/HomeIcon";
import LeaveIcon from "@/ui/icons/LeaveIcon";
import UserIcon from "@/ui/icons/UserIcon";
import React from "react";

const BottomNavbar = () => {
  return (
    <nav className=" h-[50px] p-5 flex justify-between items-center">
      <HomeIcon />
      <LeaveIcon />
      <HistoryIcon />
      <UserIcon />
    </nav>
  );
};

export default BottomNavbar;
