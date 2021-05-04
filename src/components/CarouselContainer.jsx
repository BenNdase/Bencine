import React from "react";
import { Carousel} from "react-bootstrap";
import FirtsImage from "../assets/Header/1.jpg";
import SecondImage from "../assets/Header/2.jpg";
import ThirdImage from "../assets/Header/3.jpg";
import Navbar from './Navbar';
import "../sass/components/Carousel.scss";

const CarouselContainer = () => {
  return (
    <div>
      <Navbar />
      <Carousel fade="true" interval="2000">
        <Carousel.Item>
          <img className="d-block w-100" src={FirtsImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SecondImage} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ThirdImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselContainer;
