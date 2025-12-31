import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import the exported member from the new util file
// @ts-ignore 
import { SplitText } from '../utils/SplitText'; 

gsap.registerPlugin(ScrollTrigger);

interface SlideTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SlideText: React.FC<SlideTextProps> = ({ children, className = "", delay = 0 }) => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!comp.current) return;

    const ctx = gsap.context(() => {
      try {
        // 1. Split the text
        const childSplit = new SplitText(comp.current, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        // 2. Animate the characters
        gsap.from(childSplit.chars, {
          scrollTrigger: {
            trigger: comp.current,
            toggleActions: "play none none reverse",
            start: "top 90%",
          },
          duration: 0.8,
          ease: "circ.out",
          y: 70,
          stagger: 0.02,
          delay: delay,
          opacity: 0
        });
      } catch (e) {
        console.error("SplitText animation error:", e);
      }
    }, comp);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={comp} className={className} style={{ opacity: 1 }}>
      {children}
    </div>
  );
};

export default SlideText;