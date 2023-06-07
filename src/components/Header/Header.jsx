import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="bg-primary inner-width header">
      <div className="container flex-between">
        <div className="logo-section">
          <img
            onClick={() => (window.location.href = "/")}
            src="/assets/logo.png"
            alt="logo"
            className="pointer"
          />
        </div>

        <nav className="navbar flex-evenly">
          <a href="#trainers">Our Trainers</a>
          <a href="#pricing">Pricing</a>
          <a href="#references">References/Achievements</a>
          <a href="#contact" className="button">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
