"use client"
import { useState, useEffect } from "react";

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / docHeight) * 100; // Calculate percentage
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress); // Cleanup on unmount
  }, []);

  return scrollProgress; // Return scroll progress as a percentage
};
