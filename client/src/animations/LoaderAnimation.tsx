"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "./Animation - 1751981479865.json";

interface AnimationProps {
  className?: string;
}

const LoaderAnimation: React.FC<AnimationProps> = ({ className }) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LoaderAnimation;
