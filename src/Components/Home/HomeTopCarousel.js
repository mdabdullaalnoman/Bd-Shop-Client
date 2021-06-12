import React from 'react';
import './HomeTopCarousel.css';
import carousel1 from "../Image/Cauousel/carousel one.jpg";
import carousel2 from "../Image/Cauousel/carousel two.jpg";
const HomeTopCarousel = () => {
      return (
            <div className="carousel container">
                  <div className="row">
                        <div className="col-md-6 text-center">
                              <img src={carousel1} alt="carosel one" />
                        </div>
                        <div className="col-md-6 text-center">
                              <img src={carousel2} alt="carosel two" />
                        </div>
                  </div>
            </div>
      );
};

export default HomeTopCarousel;