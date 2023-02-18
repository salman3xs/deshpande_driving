import React, { FC } from "react";
import Price from "./components/price";

const PricePage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Washing Plan</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Price</a>
            </div>
          </div>
        </div>
      </div>
      <Price />
    </div>
  );
};
export default PricePage;
