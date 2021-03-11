import React from "react";
import prices from "../img/pizza1.png";
import price from "../img/pizza2.png";
import price1 from "../img/pizza3.png";
import price2 from "../img/pizza4.png";
import price3 from "../img/pizza5.png";
import price4 from "../img/pizza6.png";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={prices} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$50.00</p>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={price} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$25.00</p>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={price1} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={price2} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$22.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={price3} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$150.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img ">
                <img src={price4} alt="price" />
              </div>
              <h1 className="price__heading">Pizza Margaritta</h1>
              <p className="price__text">
                Lorem ipsum dolor sit, constequer adciting elit, set diam
                nonumysn nign euimnds ut laorad dolore magna euimnds ut laorad
                dolore magna.
              </p>
              <p className="price__rs">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
