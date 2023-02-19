import React, { FC } from "react";
import faq from "/src/assets/img/faq.jpg";

const Gallary: FC = (): JSX.Element => {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-header text-left">
              <p>Gallary</p>
              <h2>Know more about us.</h2>
            </div>
            <div className="about-content">
              <ul>
                <li>
                  <i className="far fa-question-circle"></i>How do you teach?
                  <br />
                  <i className="fa fa-arrow-right"></i>
                  We teach Offline.
                </li>
                <li>
                  <i className="far fa-question-circle"></i>How do you teach?
                  <br />
                  <i className="fa fa-arrow-right"></i>
                  We teach Offline.
                </li>
                <li>
                  <i className="far fa-question-circle"></i>How do you teach?
                  <br />
                  <i className="fa fa-arrow-right"></i>
                  We teach Offline.
                </li>
                <li>
                  <i className="far fa-question-circle"></i>How do you teach?
                  <br />
                  <i className="fa fa-arrow-right"></i>
                  We teach Offline.
                </li>
              </ul>
              <a className="btn btn-custom" href="">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <img src={faq} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallary;
