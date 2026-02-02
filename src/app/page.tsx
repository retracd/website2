import DanglingHero from "@/components/DanglingHero";
import RisingText from "@/components/RisingText";

export const metadata = {
    title: "Brent Mayes | home",
};

export default function Home() {
    return (
        <div className="flex flex-col justify-center gap-[8vw]">
            <DanglingHero />

            <div className="ml-auto mr-[3.5vw] w-[81vw] max-w-[1230px]">
                <RisingText 
                    text = "Brent Mayes is a Computer Science Engineering student at the University of Michigan, focusing on software engineering and security. He previously helped bolster MillerKnoll's cloud security posture by engineering and deploying automated remediation solutions as an Information Security Intern. This summer, he will be heading to Scottsdale to join PayPal as a Cyber Defense Intern. For the time being, you may find him navigating a tech-focused study abroad program in Prague. When not coding, he's likely playing guitar, listening to prog rock, reading Dostoevsky, or doing some other pretentious thing like that."
                    className="text-left lowercase font-bold tracking-tight leading-tight [font-size:clamp(12px,2vw,30px)]"
                />
            </div>
        </div>
    );
}