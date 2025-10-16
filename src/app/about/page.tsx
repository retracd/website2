export default function About() {
    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">about</h1>
                <hr className="border-navy border-2 mb-12" />

                {/* Contact */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-1">contact</h2>
                    <div className="space-y-1 pl-6">
                        <p>bmayes <em>at</em> umich <em>dot</em> edu</p>
                        <p>
                            <a 
                                href="https://brentmayes.com" 
                                className="no-underline relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all after:duration-500 hover:after:w-full"
                            >
                                brentmayes.com
                            </a>
                        </p>
                        <p>
                            <a 
                                href="https://linkedin.com/in/brent-mayes/" 
                                className="no-underline relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all after:duration-500 hover:after:w-full"
                            >
                                linkedin.com/in/brent-mayes/
                            </a>
                        </p>
                        <p>US Citizen</p>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-1">education</h2>
                    <div className="space-y-6 pl-6">
                        {/* University of Michigan */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">University of Michigan</h3>
                                <span className="text-sm">Ann Arbor, MI</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="italic mb-2">Bachelor of Science in Engineering, Computer Science</p>
                                <span className="text-sm">Expected May 2027</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Wolvsec Computer Security Club Secretary</li>
                                <li>Honors Mathematics Student</li>
                                <li className=""><em>Relevant Coursework:</em> Data Structures & Algorithms, Computer Organization, Computer Security, Discrete Math</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}