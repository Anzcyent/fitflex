import React, { useEffect, useState } from "react";
import "./Hero.scss";

const Hero = () => {
  const [premiumService, setPremiumService] = useState(0);
  const [trainers, setTrainers] = useState(0);
  const [members, setMembers] = useState(2000);

  useEffect(() => {
    const premiumInterval = setInterval(() => {
      setPremiumService((prev) => prev + 1);
    }, 10);

    if (premiumService === 50) {
      clearInterval(premiumInterval);
    }

    return () => {
      clearInterval(premiumInterval);
    };
  }, [premiumService]);

  useEffect(() => {
    const trainersInterval = setInterval(() => {
      setTrainers((prev) => prev + 1);
    }, 30);

    if (trainers === 15) {
      clearInterval(trainersInterval);
    }

    return () => {
      clearInterval(trainersInterval);
    };
  }, [trainers]);

  useEffect(() => {
    const membersInterval = setInterval(() => {
      setMembers((prev) => prev + 1);
    }, 1);

    if (members === 2500) {
      clearInterval(membersInterval);
    }

    return () => {
      clearInterval(membersInterval);
    };
  }, [members]);

  return (
    <section className="hero inner-width bg-primary flex">
      <div className="big-circle"></div>
      <div className="left-section flex-col-center">
        <div className="circle circle-lg"></div>
        <h1 style={{ color: "#fff" }} className="text-center">
          Welcome to <br /> Our Fitness Haven!
        </h1>
        <br />
        <p className="text-primary">
          Discover your inner strength and unleash your full fitness potential
          at our welcoming Fitness Haven!
        </p>
        <div className="statistics text-primary flex-evenly inner-width">
          <div>
            <span className="count">{premiumService}</span>{" "}
            <span className="plus">+</span> <br /> Premium Service
          </div>
          <div>
            <span className="count">{trainers}</span>{" "}
            <span className="plus">+</span> <br /> Trainers
          </div>
          <div>
            <span className="count">{members}</span>{" "}
            <span className="plus">+</span> <br /> Happy Members
          </div>
        </div>
      </div>
      <div className="right-section flex-center">
        <img src="/assets/hero-image.png" alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
