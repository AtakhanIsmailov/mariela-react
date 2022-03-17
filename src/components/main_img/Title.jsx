import React from 'react';
import MainImg from '../../img/main_img.png'

const Title = () => {
    return (
        <div>
            <div className="main-image">
        <div className="main-image-h">
          <div className="top-color" />
          <img src={MainImg} alt="" />
          <div className="bottom-color" />
        </div>
      </div>
        </div>
    );
};

export default Title;