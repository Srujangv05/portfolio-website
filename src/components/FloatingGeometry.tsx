"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function FloatingGeometry() {
  const progress = useScrollProgress();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Scroll-driven transforms
  const outerRotateX = progress * 360;
  const outerRotateY = progress * 540;
  const innerRotateX = progress * -270;
  const innerRotateY = progress * 360;

  // Scale peaks mid-page
  const scale = 0.8 + 0.3 * Math.sin(progress * Math.PI);

  // Opacity fades at edges
  const opacity = mounted
    ? Math.min(1, Math.min(progress * 5, (1 - progress) * 5)) * 0.7
    : 0;

  // Vertical parallax drift
  const driftY = (progress - 0.5) * -60;

  // Mouse parallax offset
  const mouseOffsetX = mouse.x * 12;
  const mouseOffsetY = mouse.y * 12;

  const size = 80; // outer cube size in px
  const innerSize = 45; // inner cube size in px
  const half = size / 2;
  const innerHalf = innerSize / 2;

  const faceStyle = (transform: string, border: boolean = true): React.CSSProperties => ({
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    transform,
    backfaceVisibility: "visible",
    border: border ? "1px solid rgba(79, 70, 229, 0.15)" : "none",
    background: border ? "rgba(79, 70, 229, 0.03)" : "none",
  });

  const innerFaceStyle = (transform: string): React.CSSProperties => ({
    position: "absolute",
    width: `${innerSize}px`,
    height: `${innerSize}px`,
    transform,
    backfaceVisibility: "visible",
    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(8, 145, 178, 0.12))",
    border: "1px solid rgba(8, 145, 178, 0.2)",
  });

  return (
    <div
      className="fixed right-8 xl:right-16 top-1/2 z-10 pointer-events-none hidden lg:block"
      style={{
        transform: `translateY(calc(-50% + ${driftY + mouseOffsetY}px)) translateX(${mouseOffsetX}px)`,
        transition: "opacity 0.6s ease",
        opacity,
      }}
      aria-hidden="true"
    >
      {/* Glow halo */}
      <div
        className="absolute inset-0 -m-12 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(8, 145, 178, 0.04) 50%, transparent 70%)",
          filter: "blur(20px)",
          transform: `scale(${scale * 1.8})`,
        }}
      />

      {/* 3D Scene */}
      <div
        style={{
          perspective: "600px",
          perspectiveOrigin: "50% 50%",
          width: `${size}px`,
          height: `${size}px`,
          transform: `scale(${scale})`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Outer cube */}
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            position: "relative",
            transformStyle: "preserve-3d",
            transform: `rotateX(${outerRotateX}deg) rotateY(${outerRotateY}deg)`,
          }}
        >
          <div style={faceStyle(`translateZ(${half}px)`)} />
          <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)} />
          <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)} />
          <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)} />
          <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)} />
          <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)} />

          {/* Inner cube - centered inside outer, counter-rotates */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: `${innerSize}px`,
              height: `${innerSize}px`,
              marginLeft: `-${innerHalf}px`,
              marginTop: `-${innerHalf}px`,
              transformStyle: "preserve-3d",
              transform: `rotateX(${innerRotateX - outerRotateX}deg) rotateY(${innerRotateY - outerRotateY}deg)`,
            }}
          >
            <div style={innerFaceStyle(`translateZ(${innerHalf}px)`)} />
            <div style={innerFaceStyle(`rotateY(180deg) translateZ(${innerHalf}px)`)} />
            <div style={innerFaceStyle(`rotateY(90deg) translateZ(${innerHalf}px)`)} />
            <div style={innerFaceStyle(`rotateY(-90deg) translateZ(${innerHalf}px)`)} />
            <div style={innerFaceStyle(`rotateX(90deg) translateZ(${innerHalf}px)`)} />
            <div style={innerFaceStyle(`rotateX(-90deg) translateZ(${innerHalf}px)`)} />
          </div>
        </div>
      </div>
    </div>
  );
}
