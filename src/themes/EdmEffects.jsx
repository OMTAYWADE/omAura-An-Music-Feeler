import React, { useMemo } from "react";

function EdmEffects({ audioLevel = 0 }) {
  const colors = [
    "#22d3ee",
    "#a855f7",
    "#ec4899",
    "#60a5fa",
    "#c084fc",
    "FFFF66",
    "CC99FF",
    "FF0000",
    "FF007F",
    "FF00FF",
  ];
  const lasers = useMemo(() =>
    [...Array(10)].map(() => ({
      baseAngle: Math.random() * 40 - 20,
      multiplier: 0.5 + Math.random(),
    })),
    []
  );

  return (
    <>
      {lasers.map((laser, i) => (
        <div
          key={i}
          className="laser"
          style={{
            left: `${ Math.random() + i*10 }%`,
            color: colors[i],
            animationDuration: `${1 + laser.multiplier * 0.015}s`,
            animationDelay: `${i * 0.002}s`,
            opacity: 0.25 + audioLevel / 400,

            "--start-angle": `${laser.baseAngle}deg`,
            "--end-angle": `${laser.baseAngle + 30}deg`,
          }}
        />
      ))}
      <div
        className="edm-bg"
        style={{ filter: `brightness(${1 + audioLevel / 250})` }}
      />

      <div
        className="beatGlow"
        style={{
          transform: `translate(-50%,-50%) scale(${1 + audioLevel / 150})`
        }}
      />
      <div className="neon-orb orb1"></div>
      <div className="neon-orb orb2"></div>

      <div className="spotlight spot1"></div>
      <div className="spotlight spot2"></div>
      <div className="spotlight spot3"></div>
      <div className="spotlight spot4"></div>
      <div className="city-skyline">
        <div className="building b1"></div>
        <div className="building b2"></div>
        <div className="building b3"></div>
        <div className="building b4"></div>
        <div className="building b5"></div>
        <div className="building b6"></div>
      </div>

    </>
  );
}

export default React.memo(EdmEffects);