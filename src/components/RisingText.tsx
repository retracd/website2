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
                    className="inline-block overflow-hidden mr-[0.15em]"
                    style={{ 
                        verticalAlign: 'bottom',
                    }}
                >
                    <span
                        className="inline-block animate-rise-reveal"
                        style={{
                            animationDelay: `${i * 0.03}s`,
                            animationFillMode: 'forwards',
                            transform: 'translateY(100%)',
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </p>
    );
}