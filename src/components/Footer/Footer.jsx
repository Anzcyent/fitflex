import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="flex-between">
      <div className="left-section flex-center">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className="right-section flex-col-center">
        <p>© 2023 Fit Flex. All rights reserved.</p> <br /> Fit Flex was established
        to promote a healthy lifestyle and provide quality service to sports
        enthusiasts. We strive to provide the best experience to our customers
        with our professional trainers and modern facilities. All content and
        images on our website belong to Gym Haven and cannot be used without
        permission.
      </div>
    </footer>
  );
};

export default Footer;
