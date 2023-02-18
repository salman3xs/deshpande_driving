import React, { FC } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "/src/assets/img/img1.jpg";
import img2 from "/src/assets/img/img2.jpg";
import img3 from "/src/assets/img/img3.jpg";

const Carousel: FC = (): JSX.Element => {
  return (
    <div className="carousel">
      <div className="container-fluid">
        <OwlCarousel items={1} margin={8} autoplay ={true} className="owl-carousel">
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img1} alt="Image" />
            </div>
            <div className="carousel-text">
              <h3>Driving School</h3>
              <h1>Learn to drive</h1>
              <p>We Help You To Be An Expert Driver</p>
              <a className="btn btn-custom" href="">
                Explore More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img2} alt="Image" />
            </div>
            <div className="carousel-text">
              <h3>Driving School</h3>
              <h1>Learn to drive</h1>
              <p>We Help You To Be An Expert Driver</p>
              <a className="btn btn-custom" href="">
                Explore More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={img3} alt="Image" />
            </div>
            <div className="carousel-text">
              <h3>Driving School</h3>
              <h1>Learn to drive</h1>
              <p>We Help You To Be An Expert Driver</p>
              <a className="btn btn-custom" href="">
                Explore More
              </a>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Carousel;
