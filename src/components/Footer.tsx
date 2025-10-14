export default function Footer() {
  return (
    <footer className="text-center py-2 text-xs">
      <p>
        Developed and designed by Brent Mayes.{' '}
        <a 
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <span className="inline-block underline transition-transform duration-500 ease-out hover:[transform:skewX(-12deg)_translateX(2px)]">
            CC BY-NC-ND 4.0
        </span>
        </a>
      </p>
    </footer>
  );
}