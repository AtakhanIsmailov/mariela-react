import React from 'react';
import icon2 from '../../img/icon2.svg';


const Footer = () => {
    return (
        <footer>
        <div className="nav__inner">
          <img src={icon2} alt="logo2" />
          <div className="nav__inner_list">
            <p>Home</p>
            <p>About me</p>
            <p>Products</p>
            <p>Contact me</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;