'use client';

interface RisingTextProps {
    text: string;
    className?: string;
}

export default function RisingText({ text, className = '' }: RisingTextProps) {
    const words = text.split(' '); // split text into words

    return (
        <p className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block opacity-0 animate-rise-in"
                    style={{
                        animationDelay: `${i * 0.05}s`,
                        animationFillMode: 'forwards',
                    }}
                >
                    {word}{' '}
                </span>
            ))}
        </p>
    );
}