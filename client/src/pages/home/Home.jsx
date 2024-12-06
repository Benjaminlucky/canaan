import React from "react";
import Hero from "../../components/hero/Hero";

function Home() {
  return (
    <main className="home__section">
      <div className="home__wrapper">
        {/** Hero section here */}
        <Hero />
      </div>
    </main>
  );
}

export default Home;
