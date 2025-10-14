import type { Metadata } from "next";
import { inter, garamond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brent Mayes",
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body className="font-sans bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}
