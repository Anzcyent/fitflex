import React from "react";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing flex-col-center">
      <h2>Our Memberships</h2>
      <div className="pricing-cards flex-evenly">
        {/* Silver */}
        <div className="pricing-card">
          <span className="pricing-card-title">Silver</span>
          <ul className="service-features">
            <li>* Access to the gym</li>
            <li>* Access to basic training programs from fitness trainers</li>
            <li>* Participation in group fitness classes</li>
            <li>* Tailored personal nutrition recommendations</li>
          </ul>
          <span className="price">9$</span>
        </div>
        {/* Gold */}
        <div className="pricing-card">
          <span className="pricing-card-title">Gold</span>
          <ul className="service-features">
            <li>* Individual training with more fitness trainers</li>
            <li>* Priority access to special fitness classes</li>
            <li>* Opportunity to join advanced fitness programs</li>
            <li>* Priority access to premium fitness equipment</li>
          </ul>
          <span className="price">15$</span>
        </div>
        {/* Diamond */}
        <div className="pricing-card">
          <span className="pricing-card-title">Diamond</span>
          <ul className="service-features">
            <li>* Access to VIP member area</li>
            <li>* Appointment of a personal trainer and regular follow-up</li>
            <li>* Invitation to special events and seminars</li>
            <li>* Discounts on spa and massage services</li>
          </ul>
          <span className="price">25$</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
