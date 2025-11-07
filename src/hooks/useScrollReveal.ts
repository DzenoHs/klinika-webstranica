import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (animate only once)
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05, // Trigger when 5% visible (earlier trigger)
        rootMargin: '50px 0px -50px 0px', // Start detecting 50px before element enters viewport
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
