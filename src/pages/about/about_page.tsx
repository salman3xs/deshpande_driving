import React, { FC } from "react";
import About from "./components/about";

const AboutPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">About Us</a>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};
export default AboutPage;
