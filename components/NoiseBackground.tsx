import React from "react";

export function NoiseBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/noise.gif')",
        backgroundSize: "240px",
        backgroundRepeat: "repeat",
        opacity: 0.15,
        mixBlendMode: "hard-light",
      }}
    />
  );
}
