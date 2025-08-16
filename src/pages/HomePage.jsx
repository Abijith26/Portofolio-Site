import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

function HomePage() {
  return (
    <section className="bg-gradient-to-r from-[#ACB6E5] to-[#86FDE8] h-screen">
      <NavBar />

      <HeroSection />
    </section>
  );
}

export default HomePage;
