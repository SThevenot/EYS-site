import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
const newJeans = require("../images/newjeans.jpg")

function CarouselHomePage() {
    
  return (
    <Carousel id="carouselDiv">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newJeans}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHomePage;