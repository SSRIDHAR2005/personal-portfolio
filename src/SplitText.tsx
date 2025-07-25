import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "center" | "left" | "right";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  ease = "power1.out",
  splitType = "chars",
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete
}) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const split = new SplitType(el, {
            types: splitType,
          });

          const elements =
            splitType === "chars"
              ? split.chars
              : splitType === "words"
              ? split.words
              : split.lines;

          gsap.fromTo(
            elements,
            { ...from },
            {
              ...to,
              duration,
              delay: delay / 1000,
              stagger: 0.05,
              ease,
              onComplete: onLetterAnimationComplete,
            }
          );
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <div
      ref={textRef}
      className={className}
      style={{ textAlign: textAlign }}
    >
      {text}
    </div>
  );
};

export default SplitText;
