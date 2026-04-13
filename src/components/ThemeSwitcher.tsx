'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <button
                onClick={() => setTheme('light')}
                className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                    theme === 'light' ? 'font-bold' : 'font-normal'
                }`}
            >
                light
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                    theme === 'dark' ? 'font-bold' : 'font-normal'
                }`}
            >
                dark
            </button>
        </>
    );
}