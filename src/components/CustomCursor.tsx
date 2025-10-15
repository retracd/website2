'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            if (!cursorRef.current) { return; }

            // Lerp
            positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15;
            positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15;

            // Apply smoothed position
            cursorRef.current.style.left = `${positionRef.current.x}px`;
            cursorRef.current.style.top = `${positionRef.current.y}px`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();
        
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-navy rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        />
    );
}
