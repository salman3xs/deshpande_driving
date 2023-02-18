import React, { FC } from "react";

const Batches : FC = (): JSX.Element =>{
    return(
        <div className="location">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="section-header text-left">
                        <p>Batches</p>
                        <h2>Car Driving Teaching Batchs</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="location-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="location-text">
                                    <h3>Batch A</h3>
                                    <p>9 AM to 11 AM</p>
                                    <p><strong>Call:</strong>+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="location-text">
                                    <h3>Batch B</h3>
                                    <p>9 AM to 11 AM</p>
                                    <p><strong>Call:</strong>+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="location-text">
                                    <h3>Batch C</h3>
                                    <p>9 AM to 11 AM</p>
                                    <p><strong>Call:</strong>+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="location-text">
                                    <h3>Batch D</h3>
                                    <p>9 AM to 11 AM</p>
                                    <p><strong>Call:</strong>+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="location-form">
                        <h3>Request for an admission</h3>
                        <form>
                            <div className="control-group">
                                <input type="text" className="form-control" placeholder="Name" required={true} />
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" placeholder="Email" required={true} />
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" placeholder="Description" required={true}></textarea>
                            </div>
                            <div>
                                <button className="btn btn-custom" type="submit">Send Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Batches;