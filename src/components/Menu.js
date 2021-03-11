import React from "react";
import image from "../img/pizza.jpg";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img1">
              <img src={image} alt="pizza"></img>
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
              Lorem ipsum dolor sit, constequer adciting elit, set diam nonumysn
              nign euimnds ut laorad dolore magna nign euimnds ut laorad dolore
              magna euimnds ut laorad.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
