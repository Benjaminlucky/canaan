import React from "react";
import Hero from "../../components/hero/Hero";
import Abouthome from "../../components/aboutHome/Abouthome";
import Homeservice from "../../components/homeServices/Homeservice";
import InstituteHome from "../../components/instituteHome/InstituteHome";

function Home() {
  return (
    <main className="home__section">
      <div className="home__wrapper">
        {/** Hero section here */}
        <div className="hero">
          <Hero />
        </div>
        <div className="about__home">
          <Abouthome />
        </div>
        <div className="services__home">
          <Homeservice />
        </div>
        <div className="institute__home">
          <InstituteHome />
        </div>
      </div>
    </main>
  );
}

export default Home;
