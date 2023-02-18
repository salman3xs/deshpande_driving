import React, { FC } from "react";

const Team : FC = (): JSX.Element =>{
    return(
        <div className="team">
        <div className="container">
            <div className="section-header text-center">
                <p>Meet Our Team</p>
                <h2>Teachers</h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="team-item">
                        <div className="team-img">
                            <img src="img/team-1.jpg" alt="Team Image"/>
                        </div>
                        <div className="team-text">
                            <h2>Donald John</h2>
                            <p>Teacher</p>
                            <div className="team-social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team-item">
                        <div className="team-img">
                            <img src="img/team-2.jpg" alt="Team Image"/>
                        </div>
                        <div className="team-text">
                            <h2>Adam Phillips</h2>
                            <p>Teacher</p>
                            <div className="team-social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team-item">
                        <div className="team-img">
                            <img src="img/team-3.jpg" alt="Team Image"/>
                        </div>
                        <div className="team-text">
                            <h2>Thomas Olsen</h2>
                            <p>Teacher</p>
                            <div className="team-social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="team-item">
                        <div className="team-img">
                            <img src="img/team-4.jpg" alt="Team Image"/>
                        </div>
                        <div className="team-text">
                            <h2>James Alien</h2>
                            <p>Teacher</p>
                            <div className="team-social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Team;