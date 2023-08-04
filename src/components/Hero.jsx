import { useCallback, useState } from "react";

const min = 0,
  max = 1920;

let circlePositions = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

let newCirclePositions = generateRandomPositions(circlePositions);

function generateRandomPositions(circlePositions) {
  return circlePositions.map((position) => {
    const randomValueFirst = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomValueSecond = Math.floor(Math.random() * (max - min + 1)) + min;

    return { x: randomValueFirst, y: randomValueSecond };
  });
}

function Hero() {
  const [positions, setPosition] = useState(newCirclePositions);

  setTimeout(() => {
    newCirclePositions = generateRandomPositions(circlePositions);
    setPosition(newCirclePositions);
  }, 3000);

  return (
    <>
      <div className="hero-container flex items-center justify-center w-full h-screen relative overflow-hidden">
        <div className="noise-img-container z-10"></div>

        <CreateColoredCircle
          positionX={positions[0].x + "px"}
          positionY={positions[0].y + "px"}
          fillColor="#FF00E5"
        />
        <CreateColoredCircle
          positionX={positions[1].x + "px"}
          positionY={positions[1].y + "px"}
          fillColor="#6100FF"
        />
        <CreateColoredCircle
          positionX={positions[2].x + "px"}
          positionY={positions[2].y + "px"}
          fillColor="#FF9900"
        />

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

function CreateColoredCircle({ positionX, positionY, fillColor }) {
  return (
    <div
      className="bg-colored-circle"
      style={{
        left: positionX,
        top: positionY,
        backgroundColor: fillColor,
      }}
    ></div>
  );
}

export default Hero;
