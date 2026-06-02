import React from "react";

function DefaultEffects({ isPlaying }) {
  return (
    <>
      <div className="default-bg"></div>

      <div className="sun"></div>

      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      <div className="tree">
        <div className="trunk"></div>
        <div className="leaves"></div>
      </div>

      <div className="river"></div>
      <div className="river1"></div>

      <div className={`grass-field ${isPlaying ? "wind" : ""}`}>
        {[...Array(90)].map((_, i) => (
          <span
            key={i}
            className="grass-blade"
     style={{
      left: `${i * 1.2}%`,
      height: `${40 + Math.random() * 40}px`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random()}s`
    }}

          />
        ))}
      </div>
    </>
  );
}

export default React.memo(DefaultEffects);