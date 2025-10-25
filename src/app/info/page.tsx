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

            </div>
        </div>
    );
}