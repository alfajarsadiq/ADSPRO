import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import { ScrollSmoother } from '../utils/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapper.current || !content.current) return;

    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1.5, // Strength of the smoothing (higher = smoother/laggier)
        effects: true, // Enables data-speed and data-lag effects
        smoothTouch: 0.1, // Optional: lighter smoothing on touch devices
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
}