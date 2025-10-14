export default function Home() {
    return (
        <main className="flex flex-col justify-center gap-20 pt-12">
            <div className="px-12">
                <h1 className="font-serif italic text-[18vw] leading-none font-medium tracking-tight [text-fill-color:transparent] [-webkit-text-fill-color:transparent] [text-stroke:2px_#0B0C1A] [-webkit-text-stroke:2px_#0B0C1A]">
                    Brent Mayes
                </h1>
            </div>
            <div className="ml-auto mr-12 max-w-4xl">
                <p className="text-left text-justify uppercase tracking-tight leading-tight text-3xl">
                    Brent Mayes is a Computer Science Engineering student at the University of Michigan. 
                    With academic experience in data structures and computer security, and professional 
                    experience in cybersecurity, he is building his skills in software engineering and 
                    security. As an Information Security Intern at MillerKnoll, he helped bolster the 
                    organization's cloud security posture by engineering and deploying automated remediation 
                    solutions. He is passionate about applying his technical background to solve complex 
                    security challenges.
                </p>
            </div>
        </main>
    );
}