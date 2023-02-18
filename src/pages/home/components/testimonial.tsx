import React, { FC } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import t1 from "/src/assets/img/testimonial-1.jpg";
import t2 from "/src/assets/img/testimonial-2.jpg";
import t3 from "/src/assets/img/testimonial-3.jpg";
import t4 from "/src/assets/img/testimonial-4.jpg";

const Testimonial: FC = (): JSX.Element => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header text-center">
          <p>Testimonial</p>
          <h2>What our clients say</h2>
        </div>
        <OwlCarousel
          autoplay={true}
          className="owl-carousel testimonials-carousel"
        >
          <div className="testimonial-item">
            <img src={t1} alt="Image" />
            <div className="testimonial-text">
              <h3>Client Name</h3>
              <h4>Profession</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor auctor gravid
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img src={t2} alt="Image" />
            <div className="testimonial-text">
              <h3>Client Name</h3>
              <h4>Profession</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor auctor gravid
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img src={t3} alt="Image" />
            <div className="testimonial-text">
              <h3>Client Name</h3>
              <h4>Profession</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor auctor gravid
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img src={t4} alt="Image" />
            <div className="testimonial-text">
              <h3>Client Name</h3>
              <h4>Profession</h4>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare
                velit non vulputa. Aliqu metus tortor auctor gravid
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};
export default Testimonial;
