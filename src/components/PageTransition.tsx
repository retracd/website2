'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150);

        return () => clearTimeout(timer);
    }, [pathname]); // Runs whenever route changes

    useEffect(() => {
        // Initial page load
        setIsVisible(true)
    }, []);

    return (
        <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    )
}
