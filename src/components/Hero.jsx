import { useCallback, useState } from "react";
import HeroBackgroundCircle from "./HeroBackgroundCircle";

function Hero() {

  console.log("Hero")

  return (
    <>
      <div className="hero-container flex items-center justify-center w-full h-screen relative overflow-hidden">
        <div className="noise-img-container z-10"></div>

        <HeroBackgroundCircle fillColor="#FF00E5" />
        <HeroBackgroundCircle fillColor="#6100FF" />
        <HeroBackgroundCircle fillColor="#FF9900" />

        <div className="container flex items-center flex-col z-20 gap-6 px-4">
          <div className="text-white text-center text-3xl md:text-4xl lg:text-5xl tracking-widest">
            UNLEASH YOUR
          </div>

          <div className="text-white text-center text-6xl md:text-8xl lg:text-9xl font-bold">
            DIGITAL POTENTIAL
          </div>

          <div className="text-white text-center text-base md:text-lg">
            From <span className="font-semibold">concept to creation</span>, our
            full-service design to development agency can make your ideas a
            reality.
          </div>

          <a href="#projects-section">
            <button className="text-black text-sm py-3 px-6 rounded-full bg-white flex items-center gap-3 hover:text-white hover:bg-black transition-colors duration-200 mt-8">
              Explore our Projects
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
