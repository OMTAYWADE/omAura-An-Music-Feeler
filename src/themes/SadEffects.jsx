import React, { useMemo } from "react";

function SadEffects() {
  const drops = useMemo(
    () =>
      [...Array(40)].map(() => ({
        left: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <>
      <div className="sad-bg" />

      <div className="moon"></div>

      <div className="window-glow"></div>
      <div className="rain-container">
        {drops.map((drop, i) => (
          <div
            key={i}
            className="rain-wrapper"
            style={{
              left: `${drop.left}%`,
              animationDuration: `${drop.duration}s`,
              animationDelay: `${drop.delay}s`,
            }}
          >
            <span className="rain-drop" />
            <span className="rain-splash" />
          </div>
        ))}
      </div>
<div className="lightning-flash"></div>
      <div className="water-streak streak1"></div>
      <div className="water-streak streak2"></div>

      <div className="mist-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="mist-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              position: "absolute"
            }}
          />
        ))}
      </div>
      <div className="fog fog1"></div>
      <div className="fog fog2"></div>
<div className="sad-face">
  😔
</div>

    </>
  );
}

export default React.memo(SadEffects);