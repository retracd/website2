import type { Metadata } from "next";
import { inter, garamond, cormorantGaramond } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Brent Mayes | %s",
    default: "Brent Mayes"
  },
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${garamond.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning>
            <Providers>
                <body className="font-sans bg-cream text-navy dark:bg-navy dark:text-cream antialiased min-h-screen flex flex-col cursor-none animate-fade-in transition-colors duration-300">
                    <CustomCursor />
                    <div className="w-full mx-auto flex flex-col min-h-screen flex-grow">
                        <Navbar />
                        <main className="flex-grow">
                        {children}
                        </main>
                        <Footer />
                    </div>
                </body>
            </Providers>
        </html>
    );
}