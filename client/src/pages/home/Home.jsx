import React from "react";
import Hero from "../../components/hero/Hero";
import Abouthome from "../../components/aboutHome/Abouthome";

function Home() {
  return (
    <main className="home__section">
      <div className="home__wrapper">
        {/** Hero section here */}
        <div className="hero">
          <Hero />
        </div>
        <div className="home">
          <Abouthome />
        </div>
      </div>
    </main>
  );
}

export default Home;
