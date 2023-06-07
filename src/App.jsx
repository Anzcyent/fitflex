import React from "react";
import {
  Contact,
  Footer,
  Header,
  Hero,
  ReferencesAchievements,
  Trainers,
} from "./components";
import { ResponsiveHeader } from "./responsive";
import { useMediaQuery } from "react-responsive";
import Companies from "./components/Companies/Companies";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="app">
      {isSmallScreen ? <ResponsiveHeader /> : <Header />}
      <Hero />
      <Companies />
      <Trainers />
      <ReferencesAchievements />
      <Contact />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
