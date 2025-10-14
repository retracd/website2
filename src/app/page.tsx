export default function Home() {
    return (
        <main className="flex flex-col justify-center px-12 gap-20 pt-12">
            <div>
                <h1 className="font-serif italic text-9xl">
                    Greetings!
                </h1>
            </div>
            <div className="ml-auto max-w-3xl">
                <p className="text-left uppercase tracking-tight leading-tight text-2xl">
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