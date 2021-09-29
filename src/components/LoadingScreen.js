import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Buttons from "./Buttons";
import animationData from "../lotties/703-navis-loader.json";

const LoadingScreen = ({ options }) => {
  const { currentScreen, index } = options;
  const [timer, setTimer] = useState(0);
  const [timeout, setTimeout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentScreen === index) {
        setTimer((item) => {
          return item + 100;
        });
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentScreen, index]);

  useEffect(() => {
    if (currentScreen === index) {
      setTimer(0);
      setTimeout(3000 + Math.random() * 2000);
    }
  }, [currentScreen, index]);

  useEffect(() => {
    if (timer > timeout) {
      options.nextScreen();
    }
  }, [timer, timeout]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="screen">
      <div className="overlay">
        <Lottie options={defaultOptions} style={{ maxWidth: "450px" }} />
        <Buttons options={options} showForwardButton={false} />
      </div>
    </div>
  );
};

export default LoadingScreen;
