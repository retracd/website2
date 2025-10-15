'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cursorRef.current) { return; }

            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 bg-navy rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        />
    );
}
