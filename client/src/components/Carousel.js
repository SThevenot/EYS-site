import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
const newJeans2 = require("../images/newjeans2.webp")
const newJeans1 = require("../images/newjeans1.jpg")
const newJeans3 = require("../images/newjeans3.webp")

function CarouselHomePage() {
    
  return (
    <Carousel id="carouselDiv">
      <Carousel.Item>
        <img
          className="d-block w-100"
          id='newJeansImg'
          src={newJeans2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id='newJeansImg'
          src={newJeans1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id='newJeansImg'
          src={newJeans3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHomePage;