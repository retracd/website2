'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href:string) => {
        e.preventDefault();
        setIsTransitioning(true);

        setTimeout(() => {
            router.push(href);
            setTimeout(() => setIsTransitioning(false), 300);
        }, 300);
    };

    return (
        <>
            <nav className="flex justify-end items-center gap-8 px-12 py-6 text-2xl">
                <Link href="/" className="inline-block">
                    <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)]">
                        home
                    </span>
                </Link>
                <Link href="/about" className="inline-block">
                    <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)]">
                        about
                    </span>
                </Link>
                <Link href="/blog" className="inline-block">
                    <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)]">
                        blog
                    </span>
                </Link>
                <Link href="/info" className="inline-block">
                    <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)]">
                        info
                    </span>
                </Link>
            </nav>
            <div
                className={`fixed inset-0 bg-cream z-40 pointer-events-none transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-100' : 'opacity-0'}`}
            />
        </>
    );
}