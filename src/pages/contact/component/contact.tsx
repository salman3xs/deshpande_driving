import React, { FC } from "react";

const Example: FC = (): JSX.Element => {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>Contact for any query</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <h2>Quick Contact Info</h2>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="far fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h3>Opening Hour</h3>
                    <p>Mon - Fri, 8:00 - 9:00</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-text">
                    <h3>Call Us</h3>
                    <p>+012 345 6789</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm">
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required={true}
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required={true}
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required={true}
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required={true}
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-custom"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden={false}
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Example;
