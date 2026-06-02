import { useMemo } from "react";
import React from "react";
function RomanticEffects() {
    const hearts = useMemo(() =>
        [...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 15}s`,
            size: `${20 + Math.random() * 30}px`,
        })), []
    );

    const particles = useMemo(() =>
        [...Array(20)].map(() => ({
            left: `${Math.random() * 100}% `,
            top: `${Math.random() * 100}% `,
            delay: `${Math.random() * 8} s`,
        })),
        []
    )
    return (
        <>
            <div className="romantic-bg" />

            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
            
            <div className="hearts">
                {hearts.map((heart, i) => (
                    <span
                        key={i}
                        className="heart"
                        style={{
                            left: heart.left,
                            animationDelay: heart.delay,
                            fontSize: heart.size,
                        }}
                    >
                        ❤
                    </span>
                ))}
            </div>

            <div className="particles">
                {particles.map((particle, i) => (
                    <span
                        key={i}
                        className="particle sparkle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default React.memo(RomanticEffects);