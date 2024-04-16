import React from "react";
import RainCloud from "../components/RainCloud/RainCloud.js";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation.js";

function LoadingScreen() {
  return (
    <div className="bg-[#1b1b1b] flex, justify-center items-center w-[100vw] h-[100vh] p-[300px]">
      <LoadingAnimation />
    </div>
  );
}

export default LoadingScreen;
