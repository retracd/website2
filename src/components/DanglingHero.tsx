'use client';
import { useState, useRef, useEffect } from 'react';

export default function DanglingHero() {
  const text = "mayes, brent.";
  const letters = text.split('');
  const [rotations, setRotations] = useState(letters.map(() => 0));
  const velocities = useRef(letters.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMouseX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const mouseX = e.clientX;
      const mouseVelocity = mouseX - lastMouseX.current;
      lastMouseX.current = mouseX;

      const letterElements = containerRef.current.querySelectorAll('.letter');
      letterElements.forEach((el, i) => {
        const letterRect = el.getBoundingClientRect();
        const letterCenter = letterRect.left + letterRect.width / 2;
        const distance = Math.abs(mouseX - letterCenter);
        
        if (distance < 100) {
          const force = (mouseVelocity * (100 - distance)) / 1000;
          velocities.current[i] += force;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      setRotations(prev => prev.map((rotation, i) => {
        const springForce = -rotation * 0.1;
        const damping = velocities.current[i] * -0.9;
        
        velocities.current[i] += springForce;
        velocities.current[i] *= 0.95;
        
        return rotation + velocities.current[i];
      }));
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="px-[3.5vw]" ref={containerRef}>
      <h1 className="text-[10vw] font-extrabold tracking-tighter leading-none whitespace-nowrap">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="letter inline-block"
            style={{
              transformOrigin: 'top center',
              transform: `rotate(${rotations[i]}deg)`,
              transition: 'transform 0.05s linear',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
}