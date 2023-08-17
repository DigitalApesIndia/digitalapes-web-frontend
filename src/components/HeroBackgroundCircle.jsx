import { useState } from "react";

const min = 0,
  max = 1080,
  rotationMax = 180;

function HeroBackgroundCircle({ fillColor }) {
  const [circlePosition, setCirclePosition] = useState({
    x: 0,
    y: 0,
    rotation: 0,
  });

  setTimeout(() => {
    const randomValueFirst = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomValueSecond = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomRotation =
      Math.floor(Math.random() * (rotationMax - min + 1)) + min;
    return setCirclePosition({
      x: randomValueFirst,
      y: randomValueSecond,
      rotation: randomRotation,
    });
  }, 3000);

  return (
    <div
      className="bg-colored-circle"
      style={{
        left: circlePosition.x,
        top: circlePosition.y,
        backgroundColor: fillColor,
        transform: `rotate(${circlePosition.rotation}deg)`,
      }}
    ></div>
  );
}

export default HeroBackgroundCircle;
