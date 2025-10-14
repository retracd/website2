export default function Home() {
    return (
        <main className="flex flex-col justify-center gap-[4vw]">
            <div className="px-[3.5vw]">
                <h1 className="font-serif italic text-[18vw] leading-none font-medium tracking-tight [text-fill-color:transparent] [-webkit-text-fill-color:transparent] [text-stroke:2px_#0B0C1A] [-webkit-text-stroke:2px_#0B0C1A] whitespace-nowrap">
                    Mayes, Brent.
                </h1>
            </div>
            <div className="ml-auto mr-[3.5vw] w-[81vw] max-w-[1230px]">
                <p className="text-left uppercase tracking-tight leading-tight [font-size:clamp(12px,2vw,30px)]">
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