import React from "react";
import "./ReferencesAchievements.scss";

import subheadings from "../../utils/subheadings";
import Subheadings from "./Subheadings/Subheadings";

import { Accordion } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const ReferencesAchievements = () => {
  return (
    <section id="references" className="references-achievements flex">
      {/* left */}
      <div className="left-section flex-center">
        <img src="/assets/muscular-person.png" alt="muscular-person" />
      </div>
      {/* right */}
      <div className="right-section flex-col-start">
        <h2>References & Achievements</h2>
        <h3>Client Testimonials and Notable Achievements</h3>
        <p>
          Discover what our clients have to say about their fitness journey with
          us and explore our notable achievements as a leading gym.
        </p>

        <Accordion
          allowMultipleExpanded={false}
          preExpanded={[0]}
          className="subheadings flex-col-center"
        >
          {subheadings.map((subheading) => (
            <Subheadings
              key={subheading.id}
              icon={subheading.icon}
              title={subheading.title}
              description={subheading.description}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ReferencesAchievements;
