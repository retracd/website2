export default function About() {
    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold mb-0">about</h1>
                <hr className="border-navy border-2 mb-12" />

                {/* Contact */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold">contact</h2>
                    <div>
                        <p>bmayes <em>at</em> umich <em>dot</em> edu</p>
                        <p>brentmayes.com</p>
                        <p>linkedin.com/in/brent-mayes/</p>
                        <p>US Citizen</p>
                    </div>
                </section>
            </div>
        </div>
    );
}