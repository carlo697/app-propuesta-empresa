import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "store/actions/companyActions";
import Buttons from "./Buttons";

const NameScreen = ({ options }) => {
  const { currentScreen, index } = options;

  // @ts-ignore
  const name = useSelector((state) => state.company.name);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "") {
      options.nextScreen();
    }
  };

  useEffect(() => {
    if (currentScreen === index) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [currentScreen, index]);

  return (
    <div className="screen">
      <div className="overlay">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Escriba el nombre de su empresa</label>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => dispatch(setCompanyName(e.target.value))}
          />
        </form>

        <Buttons options={options} disableForwardButton={!name} />
      </div>
    </div>
  );
};

export default NameScreen;
