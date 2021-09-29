import React from "react";
import Buttons from "./Buttons";
import logo from "../img/logo2.png";

const HomeScreen = ({ options }) => {
  return (
    <div className="screen">

      <div className="overlay">
        <img src={logo} className="home-logo" alt="PYPAGE logo" />
        <p>
          En PYPAGE agencia de diseño y marketing digital nos involucramos con
          nuevas tecnologías para asegurar resultados óptimos en nuestros
          servicios, a continuación podrán tener la oportunidad de probar
          nuestro nuevo sistema de evaluación de Imagen Corporativa (Logotipo)
          mediante Inteligencia Artificial, el cual les recomendará parámetros
          estéticos de diseño que mejorará el impacto de su empresa/marca hacia
          su público objetivo.
        </p>
        <Buttons options={options} />
      </div>
    </div>
  );
};

export default HomeScreen;
