import React from "react";
import FirtsImage from "../assets/Header/1.jpg";
import SecondImage from "../assets/Header/2.jpg";
import ThirdImage from "../assets/Header/3.jpg";
import Navbar from './Navbar';
import "../sass/components/Header.scss";

const Header = () => {
  return (
    <div>
      <div id="carousel_1" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#carousel_1" data-slide-to="0" class="active"></li>
          <li data-target="#carousel_1" data-slide-to="1"></li>
          <li data-target="#carousel_1" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FirtsImage} alt="" />
          </div>
          <div className="carousel-item">
            <img src={SecondImage} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={ThirdImage} alt="Chicago" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel_1"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel_1"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      <div className="header-container">
        <Navbar />
        <div className="title-container">
          <h1 className="title">Obtenez les meilleurs films ici</h1>
          <p className="description">
            Ben.ciné est une maison de production de haute qualité
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
