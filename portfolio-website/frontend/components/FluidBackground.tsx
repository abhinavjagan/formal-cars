'use client';

import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

export default function FluidBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fluid = new webGLFluidEnhanced(containerRef.current);
    fluid.setConfig({
      transparent: true,
      hover: true,
      colorful: false,
      colorPalette: ['#ffffff', '#e6e6e6', '#bfbfbf', '#737373'],
      backgroundColor: '#000000',
      bloom: true,
      sunrays: false,
      splatRadius: 0.18,
      velocityDissipation: 0.18,
      densityDissipation: 1.35,
      pressure: 0.82,
      pressureIterations: 28,
    });
    fluid.start();
    fluid.multipleSplats(14);
    const splashTimer = window.setInterval(() => fluid.multipleSplats(3), 2800);

    return () => {
      window.clearInterval(splashTimer);
      fluid.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fluid-backdrop"
      aria-hidden="true"
    />
  );
}

