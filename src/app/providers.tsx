'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
    cursorEnabled: boolean;
    setCursorEnabled: (v: boolean) => void;
    animationsEnabled: boolean;
    setAnimationsEnabled: (v: boolean) => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType>({
    cursorEnabled: true,
    setCursorEnabled: () => {},
    animationsEnabled: true,
    setAnimationsEnabled: () => {},
});

export const useAccessibility = () => useContext(AccessibilityContext);

export function Providers({ children }: { children: React.ReactNode }) {
    const [cursorEnabled, setCursorEnabled] = useState(true);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedCursor = localStorage.getItem('cursorEnabled');
        if (savedCursor !== null) setCursorEnabled(savedCursor === 'true');
        
        const savedAnimations = localStorage.getItem('animationsEnabled');
        if (savedAnimations !== null) setAnimationsEnabled(savedAnimations === 'true');
    }, []);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem('cursorEnabled', String(cursorEnabled));
        document.body.classList.toggle('cursor-none', cursorEnabled);
    }, [cursorEnabled, mounted]);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem('animationsEnabled', String(animationsEnabled));
        document.body.classList.toggle('animate-fade-in', animationsEnabled);
    }, [animationsEnabled, mounted]);

    return (
        <AccessibilityContext.Provider value={{ cursorEnabled, setCursorEnabled, animationsEnabled, setAnimationsEnabled }}>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </AccessibilityContext.Provider>
    );
}