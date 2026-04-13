'use client';
import { useAccessibility } from '@/app/providers';

interface RisingTextProps {
    text: string;
    className?: string;
}

export default function RisingText({ text, className = '' }: RisingTextProps) {
    const { animationsEnabled } = useAccessibility();
    const words = text.split(' '); // split text into words

    return (
        <p className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.15em]"
                    style={{ 
                        verticalAlign: 'bottom',
                    }}
                >
                    <span
                        className={`inline-block ${animationsEnabled ? 'animate-rise-reveal' : ''}`}
                        style={{
                            ...(animationsEnabled && {
                                animationDelay: `${i * 0.03}s`,
                                animationFillMode: 'forwards',
                                transform: 'translateY(100%)',
                            })
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </p>
    );
}