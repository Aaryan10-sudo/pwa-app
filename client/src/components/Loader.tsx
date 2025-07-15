// components/Loader.tsx

import LoaderAnimation from "@/animations/LoaderAnimation";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col gap-1 bg-black z-50">
      <img
        src={"https://www.oplyx.tech/oplyxlogo2.svg"}
        className="h-[100px] "
      />
      <LoaderAnimation className="absolute mt-[150px]" />
    </div>
  );
};

export default Loader;
