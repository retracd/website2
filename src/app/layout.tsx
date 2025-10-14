import type { Metadata } from "next";
import { inter, garamond } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
            <body className="font-sans bg-cream text-navy antialiased min-h-screen flex flex-col">
                <div className="w-full mx-auto flex flex-col min-h-screen flex-grow animate-fade-in">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}