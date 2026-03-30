import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Running from "../components/running";

function HomePage() {
  return (
    <section className="h-screen relative">
      <NavBar />
      <HeroSection />
      <div className="absolute bottom-0">
        <Running />
      </div>
    </section>
  );
}

export default HomePage;
