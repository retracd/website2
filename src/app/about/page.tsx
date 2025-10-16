export default function About() {
    return (
        <div className="flex flex-col items-center px-6 py-6">
            <div className="w-full max-w-[800px]">
                {/* Header */}
                <h1 className="text-5xl font-bold">about</h1>
                <hr className="border-navy border-2 mb-12" />

                {/* Contact */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">contact</h2>
                    <div className="space-y-1 pl-6">
                        <p>bmayes <em className="font-serif font-medium">at</em> umich <em className="font-serif font-medium">dot</em> edu</p>
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
                    <h2 className="text-2xl font-bold mb-2">education</h2>
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
                                <li><em>Relevant Coursework:</em> Data Structures & Algorithms, Computer Organization, Computer Security, Discrete Math</li>
                            </ul>
                        </div>
                        {/* Bay College */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">Bay de Noc Community College</h3>
                                <span className="text-sm">Iron Mountain, MI</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="italic mb-2">Associate in Arts</p>
                                <span className="text-sm">May 2024</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Dean's List</li>
                                <li>Phi Theta Kappa Honor Society</li>
                                <li><em>Dual-enrollment degree</em> achieved alongside high school diploma</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">work experience</h2>
                    <div className="space-y-6 pl-6">
                        {/* MillerKnoll */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">MillerKnoll</h3>
                                <span className="text-sm">Zeeland, MI</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="italic mb-2">Information Security Intern</h3>
                                <span className="text-sm">May 2025 - Aug. 2025; extended - Dec. 2025</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}