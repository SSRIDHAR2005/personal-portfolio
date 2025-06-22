import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  particleCount?: number;
  particleColor?: string;
}

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 150,
  particleColor = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  let animationFrameId: number;

  if (!canvas || !ctx) return;

  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hoverSpeedMultiplier = 1;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", resize);

  const stars = Array.from({ length: particleCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    baseDx: (Math.random() - 0.5) * 0.3,
    baseDy: (Math.random() - 0.5) * 0.3,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = particleColor;
    for (const star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const update = () => {
    for (const star of stars) {
      star.x += star.baseDx * hoverSpeedMultiplier;
      star.y += star.baseDy * hoverSpeedMultiplier;

      if (star.x <= 0 || star.x >= canvas.width) star.baseDx *= -1;
      if (star.y <= 0 || star.y >= canvas.height) star.baseDy *= -1;
    }
  };

  const animate = () => {
    draw();
    update();
    animationFrameId = requestAnimationFrame(animate);
  };

  // Hover listeners
  canvas.addEventListener("mouseenter", () => {
    hoverSpeedMultiplier = 3; // speed up on hover
  });
  canvas.addEventListener("mouseleave", () => {
    hoverSpeedMultiplier = 1; // slow down again
  });

  animate();

  return () => {
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrameId);
    canvas.removeEventListener("mouseenter", () => {});
    canvas.removeEventListener("mouseleave", () => {});
  };
}, [particleCount, particleColor]);


  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "transparent",
      }}
    />
  );
};

export default Particles;
