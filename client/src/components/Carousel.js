import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
const newJeans1 = require("../images/twice1.jpg")
const newJeans2 = require("../images/twice2.jpg")
const newJeans3 = require("../images/twice3.jpg")

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