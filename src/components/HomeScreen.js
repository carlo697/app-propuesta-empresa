import React from "react";
import Buttons from "./Buttons";

const HomeScreen = ({ options }) => {
  return (
    <div className="screen">
      <p>¡Bienvenido! Presione el botón "siguiente" para continuar</p>
      <Buttons options={options} />
    </div>
  );
};

export default HomeScreen;
