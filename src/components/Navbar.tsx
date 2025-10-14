import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center gap-8 px-12 py-6 text-xl">
        <Link 
            href="/"
            className="transition-transform duration-500 ease-out hover:skew-x-[-12deg]"
        >
            Home
        </Link>
        <Link
            href="/about"
            className="transition-transform duration-500 ease-out hover:skew-x-[-12deg]"
        >
            About
        </Link>
        <Link
            href="/blog"
            className="transition-transform duration-500 ease-out hover:skew-x-[-12deg]"    
        >
            Blog
        </Link>
        <Link
            href="/info"
            className="transition-transform duration-500 ease-out hover:skew-x-[-12deg]"    
        >
            Info
        </Link>
    </nav>
  );
}