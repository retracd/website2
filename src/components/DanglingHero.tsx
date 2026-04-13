'use client';
import { useState, useRef, useEffect } from 'react';
import { useAccessibility } from '@/app/providers';

export default function DanglingHero() {
    const { animationsEnabled } = useAccessibility();
    const text = "mayes, brent.";
    const letters = text.split(''); // split text into indivudal letters
    const [rotations, setRotations] = useState(letters.map(() => 0)); // track rotation angle for each letter
    const velocities = useRef(letters.map(() => 0));
    const containerRef = useRef<HTMLDivElement>(null);
    const lastMouseX = useRef(0);

    useEffect(() => {
        if (!animationsEnabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            // Calculate mouse velocity
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const mouseVelocity = mouseX - lastMouseX.current;
            lastMouseX.current = mouseX;
            // Check each letter's proximity to mouse
            const letterElements = containerRef.current.querySelectorAll('.letter');
            letterElements.forEach((el, i) => {
                const letterRect = el.getBoundingClientRect();

                const isHovering =
                    mouseX >= letterRect.left &&
                    mouseX <= letterRect.right &&
                    mouseY >= letterRect.top &&
                    mouseY <= letterRect.bottom;

                if (isHovering) {
                    const force = -mouseVelocity * 0.04;
                    velocities.current[i] += force;
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [animationsEnabled]);

    // Animation loop to update rotations based on velocities
    useEffect(() => {
        if (!animationsEnabled) return;
        let animationFrame: number;
        let lastFrameMS = performance.now();

        const animate = (time: number) => {
            const dt = (time - lastFrameMS) / 1000;
            lastFrameMS = time;

            const delta = Math.min(dt, 0.1);

            setRotations(prev => prev.map((rotation, i) => {
                // Simple spring physics
                const springForce = -rotation * 1.5;
                // Apply spring force acceleration
                velocities.current[i] += springForce * delta;
                // Damping
                velocities.current[i] *= Math.pow(0.05, delta);

                return rotation + velocities.current[i] * delta * 60;
            }));

            animationFrame = requestAnimationFrame(animate);
        };

        //animate();
        animationFrame = requestAnimationFrame(animate);
        // Cleanup on unmount
        return () => cancelAnimationFrame(animationFrame);
    }, [animationsEnabled]);

    return (
        <div className="px-[3.5vw]" ref={containerRef}>
            <h1 className="text-[10vw] font-extrabold tracking-tighter leading-none whitespace-nowrap">
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        className="letter inline-block"
                        style={{
                            // Pin the rotation point to the top center of each letter
                            transformOrigin: 'top center',
                            // Apply the rotation
                            transform: `rotate(${rotations[i]}deg)`,
                            // Smooth transition between frames
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