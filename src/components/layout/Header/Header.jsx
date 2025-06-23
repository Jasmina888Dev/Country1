import React from "react";
import { NavLink } from "react-router-dom";
import headerbg from "../../../assets/image"

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1></h1>
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <select>
              <option value="">Regions</option>
              <option value="chui">Chui</option>
              <option value="talas">Talas</option>
              <option value="issyk-kul">Issyk-Kul</option>
              <option value="naryn">Naryn</option>
              <option value="jalal-abad">Jalal-Abad</option>
              <option value="osh">Osh</option>
              <option value="batken">Batken</option>
            </select>
            <NavLink to={"/"}>Culture</NavLink>
            <NavLink to={"/"}>Gallery</NavLink>
            <NavLink to={"/"}>Routes</NavLink>
          </div>
          <div className="header--btn">
            <select>
              <option value="">Eng</option>
              <option value="russian">Russian</option>
              <option value="kyrgyz">Kyrgyz</option>
            </select>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
