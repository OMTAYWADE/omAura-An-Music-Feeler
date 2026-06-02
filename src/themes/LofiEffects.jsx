import React from "react";
import { useMemo } from "react";

function LofiEffects() {

  const rain = useMemo(() =>
    [...Array(80)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`,
    })), []
  );

  const stars = useMemo(() =>
    [...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    })), []
  );

  return (
    <>
      
      <div className="lofi-bg" />
    <div className="moon"></div>
      <div className="rain-container">
        {rain.map((drop, i) => (
          <span
            key={i}
            className="rain-drop"
            style={{
              left: drop.left,
              animationDelay: drop.delay,
              animationDuration: drop.duration,
            }}
          />
        ))}
      </div >

      <div className="stars">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="fog fog1"></div>
      <div className="fog fog2"></div>
    </>
  );
}

export default React.memo(LofiEffects);