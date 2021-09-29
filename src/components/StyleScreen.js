import { styles } from "db";
import { findTranslation } from "localization";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "store/actions/companyActions";
import Buttons from "./Buttons";

const StyleScreen = ({ options }) => {
  // @ts-ignore
  const style = useSelector((state) => state.company.style);
  // @ts-ignore
  const type = useSelector((state) => state.company.type);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setStyle(e.target.value));
  };

  if (!type) {
    return null;
  }

  return (
    <div className="screen">
      <div className="overlay">
        <form action="">
          <label htmlFor="">¿Qué estilo piensa que posee su logotipo?</label>
          <select name="type" onChange={handleChange} value={style}>
            <option value=""></option>
            {styles[type].map((item, index) => (
              <option value={item} key={index}>
                {findTranslation(item)}
              </option>
            ))}
          </select>
        </form>

        <Buttons options={options} disableForwardButton={style === ""} />
      </div>
    </div>
  );
};

export default StyleScreen;
