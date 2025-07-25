import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface BlurSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const BlurSection: React.FC<BlurSectionProps> = ({
  children,
  delay = 0,
  direction = "bottom",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dirMap: Record<string, { y?: number; x?: number }> = {
      top: { y: -40 },
      bottom: { y: 40 },
      left: { x: -40 },
      right: { x: 40 },
    };

    const animate = () => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          filter: "blur(12px)",
          ...dirMap[direction],
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          x: 0,
          duration: 2,
          delay: delay / 1000,
          ease: "power3.out",
        }
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(); // 👈 trigger every time it enters view
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default BlurSection;
