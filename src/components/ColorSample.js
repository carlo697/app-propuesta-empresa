import React, { useState } from "react";
import { copyToClipboard } from "utils";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
const convert = require("color-convert");

const ColorSample = ({ color }) => {
  const [className, setClassName] = useState("");
  const [showSuccessIcon, setShowSuccessIcon] = useState(false);

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

  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

  const useWhite = brightness < 155;

  const handleClick = () => {
    copyToClipboard(hex);

    setClassName("clicked");
    setShowSuccessIcon(true);
  };

  const handleAnimationEnd = () => {
    setClassName("");
  };

  const handlePointerLeave = () => {
    setShowSuccessIcon(false);
  };

  return (
    <div
      className={`color-sample-wrapper ${className}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      onPointerLeave={handlePointerLeave}
    >
      <div style={{ background: color }} className="color-sample">
        <p style={useWhite ? { color: "white" } : { color: "black" }}>{hex}</p>
        <div className="clipboard">
          {showSuccessIcon ? <FaClipboardCheck /> : <FaClipboard />}
        </div>
      </div>
    </div>
  );
};

export default ColorSample;
