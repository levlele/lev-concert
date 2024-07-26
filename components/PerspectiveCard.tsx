"use client";

import { useRef } from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PerspectiveCard = ({ className, children }: CardProps) => {
  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <div
      className={`will-change-transform [perspective:1000px] ${className}`}
      onClick={(ev) => {
        ev.currentTarget.style.setProperty("scale", "1.05");
      }}
    >
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className="group relative transition-transform ease-out will-change-transform md:hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
      >
        {children}
        <div className="pointer-events-none absolute inset-0 rounded-xl md:group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_20%,transparent_60%)]" />
      </div>
    </div>
  );
};
