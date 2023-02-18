import React, { FC } from "react";
import Service from "./components/service";
import Testimonial from "./components/testimonial";

const ServicesPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Service</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Service</a>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Testimonial />
    </div>
  );
};
export default ServicesPage;
