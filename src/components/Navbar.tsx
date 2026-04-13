import Link from 'next/link';

export default function Navbar() {
  return (
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
        <Link href="/settings" className="inline-block">
            <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(3px)]">
                settings
            </span>
        </Link>
    </nav>
  );
}