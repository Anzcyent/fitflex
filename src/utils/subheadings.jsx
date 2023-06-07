import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";

const subheadings = [
  {
    id: 1,
    title: "Client Testimonials",
    description:
      "Get inspired by heartfelt testimonials from our diverse range of clients who have experienced remarkable results and life-changing journeys through their dedication and our comprehensive fitness programs. Their stories reflect the power of our personalized approach, motivating others to embark on their own transformative paths.",
    icon: <AiFillSafetyCertificate />,
  },
  {
    id: 2,
    title: "Success Stories",
    description:
      "Dive into the captivating success stories of individuals who have embraced their fitness goals and surpassed their own expectations under our guidance. From weight loss achievements and muscle gain milestones to significant performance improvements, these stories serve as powerful reminders that with determination, support, and expert coaching, anyone can achieve their fitness aspirations.",
    icon: <FaMedal />,
  },
  {
    id: 3,
    title: "Awards and Recognitions",
    description:
      "Discover the awards and prestigious recognitions that highlight our commitment to excellence in the fitness industry. From accolades for outstanding training programs and exceptional customer service to being recognized as a trusted name in the fitness community, these honors are a testament to our unwavering dedication to providing top-notch experiences for our members.",
    icon: <BsFillAwardFill />,
  },
];

export default subheadings;
