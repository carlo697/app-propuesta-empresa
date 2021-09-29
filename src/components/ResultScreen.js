import { db } from "db";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadFont } from "utils";
import Buttons from "./Buttons";
import ColorSample from "./ColorSample";

const fontTime = 3000;

const ResultScreen = ({ options }) => {
  // @ts-ignore
  const type = useSelector((state) => state.company.type);
  // @ts-ignore
  const style = useSelector((state) => state.company.style);
  // @ts-ignore
  const image = useSelector((state) => state.company.image);
  // @ts-ignore
  const name = useSelector((state) => state.company.name);

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((item) => item + 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!type || !style) {
    return null;
  }

  const result = db.find((item) => item.style === style && item.type === type);

  if (!result) {
    return null;
  }

  const { colors, fonts } = result;

  const period = fonts.length * fontTime;
  const periodCount = Math.floor(elapsedTime / period);
  const timeSinceLastPeriod = elapsedTime - periodCount * period;
  const fontIndex = Math.floor(timeSinceLastPeriod / fontTime);

  return (
    <div className="screen">
      <div className="overlay">
        <img className="result-img" src={image} alt="uploaded logo" />
        <p className="company-name" style={{ fontFamily: fonts[fontIndex] }}>
          {name}
        </p>

        <div className="fonts">
          {fonts.map((font, index) => {
            loadFont(font);

            return (
              <h2 key={index} className="font" style={{ fontFamily: font }}>
                {font}
              </h2>
            );
          })}
        </div>

        <div className="colors">
          {colors.map((color, index) => (
            <ColorSample color={color} key={index} />
          ))}
        </div>
        <Buttons options={options} backwardSkip={2} />
      </div>
    </div>
  );
};

export default ResultScreen;
