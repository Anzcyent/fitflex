import React from "react";
import "./Trainer.scss";

const Trainer = ({ name, bio, image }) => {
  return (
    <div className="trainer pointer flex-col-center p-5">
      <div className="trainer-header flex-col-center">
        <img src={image} alt="trainer-image" />
        <span className="name">{name}</span>
      </div>

      <div className="stick inner-width"></div>

      <div className="trainer-footer flex-col-center">
        <span className="bio">{bio}</span>
      </div>
    </div>
  );
};

export default Trainer;
