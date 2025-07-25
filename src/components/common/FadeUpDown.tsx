"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeUpDown = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const items = container.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          duration: 0.6,
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default FadeUpDown;
