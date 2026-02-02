export const metadata = {
    title: "info",
};

export default function Info() {
    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">info</h1>
                <hr className="border-navy border-2 mb-12" />

                {/* Overview */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">overview</h2>
                    <div className="pl-6 space-y-2">
                        <p>This website was built from scratch as a personal project to showcase my work and writing while exploring modern web development practices.</p>
                        <p>The site emphasizes clean design, thoughtful interactions, and performance.</p>
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">tech stack</h2>
                    <div className="pl-6 space-y-4">
                        <div>
                            <h3 className="font-semibold mb-1">Next.js 15 & React 19</h3>
                            <p className="text-sm">Modern React framework with App Router for static site generation and optimal performance.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">TypeScript</h3>
                            <p className="text-sm">Type-safe development for better code quality and developer experience.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Tailwind CSS</h3>
                            <p className="text-sm">Utility-first CSS framework for rapid, consistent styling.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Framer Motion</h3>
                            <p className="text-sm">Animation library for smooth, interactive UI transitions.</p>
                        </div>
                    </div>
                </section>

                {/* Design Philosophy */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">design philosophy</h2>
                    <div className="pl-6 space-y-2">
                        <p>
                            The design centers on a single typeface, the sans-serif Inter, to create a clean and unified aesthetic.
                            Contrast and hierachy are achieved not by mixing fonts, but through careful variations in font weight, size, and spacing.
                            This typographic minimalism is paired with contemporary lowercase styling.
                        </p>
                        <p>
                            Interactive elements like the dangling hero text and custom cursor add personality without overwhelming the content. 
                            The cream background and dark navy text create a warm, readable experience.
                        </p>
                    </div>
                </section>

                {/* Development Workflow */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">development workflow</h2>
                    <div className="pl-6 space-y-2">
                        <p>Built using modern software engineering practices with feature branches, pull requests, and clean commit history—all visible in the public GitHub repository.</p>
                        <p>
                            The site is statically exported and hosted on cPanel, ensuring fast load times and minimal server overhead. 
                            In truth, I purchase this domain and hosting through the same provider, and didn&apos;t feel like setting up Vercel.
                        </p>
                    </div>
                </section>

                {/* Future Plans */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">future plans</h2>
                    <ul className="list-disc space-y-1 pl-12">
                        <li>Custom 404 page</li>
                        <li>Dark mode toggle</li>
                        <li>Enhanced mobile responsiveness</li>
                        <li>Page transition effects (if possible)</li>
                    </ul>
                </section>

                {/* Repository */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">source code</h2>
                    <div className="pl-6">
                        <p>
                            View the full source code on{' '}
                            <a 
                                href="https://github.com/retracd/website2"
                                target="_blank"
                                className="no-underline relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all after:duration-500 hover:after:w-full"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}