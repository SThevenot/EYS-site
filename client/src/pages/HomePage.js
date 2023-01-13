/** @format */

import React from "react";
import "../styles/HomePage.css";
import CarouselHomePage from "../components/Carousel";
import Mission from "../components/Mission";

function HomePage() {
  return (
    <div id="homePageSection">
      <CarouselHomePage />
      <Mission/>
    </div>
  );
}

export default HomePage;
