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
                        <p>The site emphasizes clean design, thoughtful interactions, and performance—hosted statically for speed and reliability.</p>
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

            </div>
        </div>
    );
}