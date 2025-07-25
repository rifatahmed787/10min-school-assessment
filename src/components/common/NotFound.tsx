import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NotFound: React.FC = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        iconRef.current,
        { scale: 0, rotate: -90 },
        { scale: 1, rotate: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-[80vh] text-center px-6"
    >
      <div
        ref={iconRef}
        className="w-24 h-24 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-6 shadow-lg"
      >
        <svg
          className="w-12 h-12 text-red-600 dark:text-red-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M12 22a10 10 0 100-20 10 10 0 000 20z"
          />
        </svg>
      </div>

      <div ref={textRef}>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Project Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-300 max-w-md mx-auto">
          We couldn’t find any project matching your criteria. Try adjusting your search or filters and try again.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
