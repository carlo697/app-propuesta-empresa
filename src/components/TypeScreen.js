import { types } from "db";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "store/actions/companyActions";
import Buttons from "./Buttons";

const TypeScreen = ({ options }) => {
  // @ts-ignore
  const type = useSelector((state) => state.company.type);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setType(e.target.value));
  };

  return (
    <div className="screen">
      <div className="overlay screen-gradient"></div>
      <div className="overlay">
        <form action="">
          <label htmlFor="">¿Que tipo de empresa es?</label>
          <select name="type" onChange={handleChange} value={type}>
            <option value=""></option>
            {types.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </form>

        <Buttons options={options} disableForwardButton={type === ""} />
      </div>
    </div>
  );
};

export default TypeScreen;
