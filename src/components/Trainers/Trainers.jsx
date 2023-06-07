import React from "react";
import "./Trainers.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { trainers } from "../../api/dummy.json";
import Trainer from "./Trainer/Trainer";
import { sliderSettings } from "../../utils/sliderSettings";

const Trainers = () => {
  return (
    <section id="trainers" className="trainers">
      <div className="title-section flex-col-start">
        <span>Our</span>
        <span>Trainers</span>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        {trainers.map((trainer) => (
          <SwiperSlide key={trainer.id}>
            <Trainer
              name={trainer.name}
              image={trainer.image}
              bio={trainer.bio}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trainers;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex-center arrow-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
