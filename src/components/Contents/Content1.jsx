import React from 'react';
import aboutMe from '../../img/aboutMe.png'
import myProduct from '../../img/myProduct.png'
import contactMe from '../../img/contactMe.png'




const Content1 = () => {
    return (
        <div className="container hero">
        <div className="hero__top">
          <span>I'm a cushion designer</span>
          <p>
            Based in San Francisco, California I design trendy and fashion
            Cushions,<br />
            since I have memory I always had a tendency to design and
            illustration.
          </p>
          <button className="btn-2">Learn More</button>
        </div>
        <div className="three__img">
          <div className="three__img_backround">
            <img src={aboutMe} alt="" />
            <div className="rrr">
              <p>About me</p>
              <span>Learn more</span>
            </div>
          </div>
          <div className="three__img_backround">
            <img src={myProduct} alt="" />
            <div className="rrr">
              <p>My products</p>
              <span>Learn more</span>
            </div>
          </div>
          <div className="three__img_backround">
            <img src={contactMe} alt="" />
            <div className="rrr">
              <p>Contact me</p>
              <span>Learn more</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Content1;