// FadeUp.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeUp = ({ children, delay = 0, className = '' }: FadeUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeUp;
