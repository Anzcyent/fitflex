import React, { useState } from "react";
import "./ResponsiveHeader.scss";
import { FaBars } from "react-icons/fa";

const ResponsiveHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-primary flex-between responsive-header">
      <div className="logo-section flex-center">
        <img src="/assets/logo.png" alt="logo" />
      </div>

      <div className="icon-section flex-center">
        <FaBars onClick={() => setOpenMenu(!openMenu)} className="pointer" />
      </div>

      {openMenu && (
        <nav className="responsive-menu flex-col-evenly p-5">
          <a href="#trainers">Our Trainers</a>
          <a href="#pricing">Pricing</a>
          <a href="#references">References<br/> / Achievements</a>
          <a href="#contact" className="button">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default ResponsiveHeader;
