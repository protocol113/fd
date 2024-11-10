"use client";

import { useEffect, useState } from 'react';

const useBackgroundCurves = (count: number): string[] => {
  const generateSmoothCurve = (pageHeight: number): string => {
    const startX = Math.random() * -200;
    const startY = Math.random() * pageHeight;
    const endX = window.innerWidth + Math.random() * 200;
    const endY = Math.random() * pageHeight;

    // Control points with reduced randomness for smoother, more controlled curves
    const ctrl1X = startX + (endX - startX) * 0.25;
    const ctrl1Y = startY + (Math.random() - 0.5) * pageHeight * 0.3; // Reduced variation
    const ctrl2X = startX + (endX - startX) * 0.75;
    const ctrl2Y = endY + (Math.random() - 0.5) * pageHeight * 0.3; // Reduced variation

    return `M ${startX} ${startY} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${endX} ${endY}`;
  };

  const [curves, setCurves] = useState<string[]>([]);

  const generateAndSetCurves = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const newCurves = Array(count).fill(0).map(() => generateSmoothCurve(pageHeight));
    setCurves(newCurves);
  };

  useEffect(() => {
    // Generate initial curves on page load
    generateAndSetCurves();

    // Recalculate curves after resizing stops
    const handleResize = debounce(() => {
      generateAndSetCurves();
    }, 300); // Adjust debounce as needed

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  return curves;
};

// Debounce function to control frequency of function calls
function debounce(func: () => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(), wait);
  };
}

export default useBackgroundCurves;