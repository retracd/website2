'use client';

import { useAccessibility } from '@/app/providers';
import { useEffect, useState } from 'react';

export default function AccessibilitySwitcher() {
    const [mounted, setMounted] = useState(false);
    const { cursorEnabled, setCursorEnabled, animationsEnabled, setAnimationsEnabled } = useAccessibility();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <span className="font-semibold w-[140px]">custom cursor:</span>
                <button
                    onClick={() => setCursorEnabled(true)}
                    className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                        cursorEnabled ? 'font-bold' : 'font-normal'
                    }`}
                >
                    on
                </button>
                <button
                    onClick={() => setCursorEnabled(false)}
                    className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                        !cursorEnabled ? 'font-bold' : 'font-normal'
                    }`}
                >
                    off
                </button>
            </div>

            <div className="flex items-center gap-4">
                <span className="font-semibold w-[140px]">animations:</span>
                <button
                    onClick={() => setAnimationsEnabled(true)}
                    className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                        animationsEnabled ? 'font-bold' : 'font-normal'
                    }`}
                >
                    default
                </button>
                <button
                    onClick={() => setAnimationsEnabled(false)}
                    className={`underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)] ${
                        !animationsEnabled ? 'font-bold' : 'font-normal'
                    }`}
                >
                    reduced
                </button>
            </div>
        </div>
    );
}