import { db, fonts } from "db";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { copyToClipboard, loadFont } from "utils";
import Buttons from "./Buttons";
const convert = require("color-convert");

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

  const fontTime = 1000;
  const period = fonts.length * fontTime;
  const periodCount = Math.floor(elapsedTime / period);
  const timeSinceLastPeriod = elapsedTime - (periodCount * period);
  const fontIndex = Math.floor(timeSinceLastPeriod / fontTime);

  return (
    <div className="screen">
      <img className="result-img" src={image} alt="uploaded logo" />
      <p className="company-name" style={{ fontFamily: fonts[fontIndex] }}>{name}</p>

      <div className="fonts">
        {fonts.map((font, index) => {
          const fontLoaded = loadFont(font);

          return (
            <h2 key={index} className="font" style={{ fontFamily: font }}>
              {font}
            </h2>
          );
        })}
      </div>

      <div className="colors">
        {colors.map((color, index) => {
          let hex = "#FFFFFF";
          let rgb = [255, 255, 255];

          try {
            // @ts-ignore
            rgb = convert.keyword.rgb(color);
            // @ts-ignore
            hex = "#" + convert.keyword.hex(color);
          } catch (error) {
            try {
              // @ts-ignore
              rgb = convert.hex.rgb(color);
              hex = color;
            } catch (error) {}
          }

          const brightness =
            (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

          const useWhite = brightness < 155;

          return (
            <div
              style={{ background: color }}
              className="color-sample"
              key={index}
              onClick={() => copyToClipboard(hex)}
            >
              <p style={useWhite ? { color: "white" } : { color: "black" }}>
                {hex}
              </p>
            </div>
          );
        })}
      </div>
      <Buttons options={options} />
    </div>
  );
};

export default ResultScreen;
