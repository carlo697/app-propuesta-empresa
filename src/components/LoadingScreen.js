import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Buttons from "./Buttons";
import loadingAnimation from "../lotties/703-navis-loader.json";
import successAnimation from "../lotties/68994-success.json";

const LoadingScreen = ({ options }) => {
  const { isActive } = options;
  const [timer, setTimer] = useState(0);
  const [timeout, setTimeout] = useState(0);

  const showLoading = timer < timeout;
  const showSuccess = timer > timeout;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setTimer((item) => {
          return item + 100;
        });
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setTimer(0);
      setTimeout(3000 + Math.random() * 2000);
    } else {
      setTimer(0);
    }
  }, [isActive]);

  useEffect(() => {
    if (timer > timeout) {
      //   options.nextScreen();
    }
  }, [timer, timeout]);

  return (
    <div className="screen">
      <div className="overlay">
        <div className={`overlay-lottie ${showLoading ? "opacity-1" : ""}`}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loadingAnimation,
            }}
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>

      <div className="overlay transition-all">
        <div className={`overlay-lottie ${showSuccess ? "opacity-1" : ""}`}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: successAnimation,
            }}
            style={{ maxWidth: "450px" }}
          />
          <p>
            ¡El análisis está listo! Haga clic en "Siguiente" para ver los
            parámetros estéticos recomendados según las tendencias actuales y
            público objetivo.
          </p>
        </div>
      </div>
      <Buttons options={options} showForwardButton={timer > timeout} />
    </div>
  );
};

export default LoadingScreen;
