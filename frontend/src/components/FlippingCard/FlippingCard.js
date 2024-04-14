// dependencies
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

// assets
import img01 from "../../assets/Forecast7Days/o1.jpg";
import img02 from "../../assets/Forecast7Days/o2.jpg";

// styles
import style from "./FlippingCard.module.css";

// components
import QuickStats from "../QuickStats/QuickStats.jsx";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomImage, setRandomImage] = useState(getRandomImage());

  // function to choose a randome img for Forecast
  function getRandomImage() {
    const images = [
      require("../../assets/Forecast7Days/o1.jpg"),
      require("../../assets/Forecast7Days/o2.jpg"),
      require("../../assets/Forecast7Days/o3.jpg"),
      require("../../assets/Forecast7Days/o4.jpg"),
      require("../../assets/Forecast7Days/o5.jpg"),
      require("../../assets/Forecast7Days/o6.jpg"),
      require("../../assets/Forecast7Days/o7.jpg"),
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
      if (!isFlipped) {
        setRandomImage(getRandomImage());
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-[300px] cursor-pointer mt-[100px]">
      <div
        className="flip-card w-[200px] h-[300px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.5,
            animationDirection: "normal",
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] flex justify-center items-center">
            <img
              className="rounded-3xl"
              src={isFlipped ? randomImage : randomImage}
              alt="img"
            />

            {!isFlipped && (
              <div className="absolute ">
                <QuickStats />
              </div>
            )}
            {isFlipped && (
              <div
                className="absolute"
                style={{
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-xl text-white">more information</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlippingCard;
