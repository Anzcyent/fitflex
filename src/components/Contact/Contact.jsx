import React from "react";
import "./Contact.scss";

import {
  BsFillTelephoneFill,
  BsFillChatDotsFill,
  BsCameraVideoFill,
} from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="contact flex-center">
      <div className="left-section">
        <h4 className="title">Contact Us</h4>
        <span className="primary-text">Easy to Contact Us</span>
        <p className="briefing">
          Have questions or want to learn more about our gym? Get in touch with
          us today! Our friendly team is here to provide you with the
          information and support you need on your fitness journey.
        </p>

        <div className="contact-boxes">
          <div className="contact-box">
            <div className="contact-box-header flex-between">
              <div className="icon-area flex-center">
                <BsFillTelephoneFill />
              </div>

              <div className="info flex-col-start">
                <span>Call</span>
                <span>+90 546 717 74 21</span>
              </div>
            </div>
            <div className="contact-box-footer flex-center">
              <button>Call Now</button>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-header flex-between">
              <div className="icon-area flex-center">
                <BsFillChatDotsFill />
              </div>

              <div className="info flex-col-start">
                <span>Chat</span>
                <span>+90 546 717 74 21</span>
              </div>
            </div>
            <div className="contact-box-footer flex-center">
              <button>Chat Now</button>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-header flex-between">
              <div className="icon-area flex-center">
                <BsCameraVideoFill />
              </div>

              <div className="info flex-col-start">
                <span>Video Call</span>
                <span>+90 546 717 74 21</span>
              </div>
            </div>
            <div className="contact-box-footer flex-center">
              <button>Video Call Now</button>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-header flex-between">
              <div className="icon-area flex-center">
                <AiOutlineMessage />
              </div>

              <div className="info flex-col-start">
                <span>Message</span>
                <span>+90 546 717 74 21</span>
              </div>
            </div>
            <div className="contact-box-footer flex-center">
              <button>Message Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section flex-center">
        <img src="/assets/gym-heaven.png" alt="gym-heaven" />
      </div>
    </section>
  );
};

export default Contact;
