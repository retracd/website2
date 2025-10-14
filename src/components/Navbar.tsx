import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center gap-8 px-12 py-6 text-xl">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/info">Info</Link>
    </nav>
  );
}