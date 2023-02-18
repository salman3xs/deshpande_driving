import React, { FC } from "react";
import Batches from "./components/batches";

const BatchesPage: FC = (): JSX.Element => {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Batches</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Batches</a>
            </div>
          </div>
        </div>
      </div>
      <Batches />
    </div>
  );
};
export default BatchesPage;
