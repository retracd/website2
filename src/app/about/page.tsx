export default function About() {
    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">about</h1>
                <hr className="border-navy border-2 mb-12" />

                {/* Contact */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-1">contact</h2>
                    <div className="space-y-1 pl-4">
                        <p>bmayes <em>at</em> umich <em>dot</em> edu</p>
                        <p>
                            <a href="https://brentmayes.com" className="hover:underline">
                                brentmayes.com
                            </a>
                        </p>
                        <p>
                            <a href="https://linkedin.com/in/brent-mayes/" className="hover:underline">
                                linkedin.com/in/brent-mayes/
                            </a>
                        </p>
                        <p>US Citizen</p>
                    </div>
                </section>
            </div>
        </div>
    );
}