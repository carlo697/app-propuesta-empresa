import React from "react";
import Buttons from "./Buttons";

const HomeScreen = ({ options }) => {
  return (
    <div className="screen">
      <div className="overlay screen-gradient"></div>

      <div className="overlay">
        <p>¡Bienvenido! Presione el botón "siguiente" para continuar</p>
        <Buttons options={options} />
      </div>
    </div>
  );
};

export default HomeScreen;
