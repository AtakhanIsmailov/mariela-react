import React from "react";
import logo from "../../img/logo.svg";
import basket from "../../img/basket.svg";


const Header = () => {
  return (
    <nav>
      <div className="nav__inner">
        <img src= {logo} alt="logo" />
        <div className="nav__inner_list">
          <p>Home</p>
          <p>About me</p>
          <p>Products</p>
          <p>Contact me</p>
          <img src={basket} alt="basket" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
