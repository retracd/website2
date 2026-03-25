'use client';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function CustomCursor() {
    if (isMobile) return null; // basic mobile device check
    
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;

            setIsHovering(isClickable);
        };

        let lastFrameMS = 0;
        const animate = (time: number) => {
            if (!cursorRef.current) { return; }
            const dt = (time - lastFrameMS) / 1000;
            lastFrameMS = time;

            // Lerp
            positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 30 * dt;
            positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 30 * dt;

            // Apply smoothed position
            cursorRef.current.style.left = `${positionRef.current.x}px`;
            cursorRef.current.style.top = `${positionRef.current.y}px`;

            
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        //animate();
        const frameId = requestAnimationFrame(animate);
        
        return () => window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(frameId);
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed w-3 h-3 bg-navy rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                isHovering ? 'scale-[2] opacity-50' : 'opacity-100'
            }`}
        />
    );
}
