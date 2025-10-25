import DanglingHero from "@/components/DanglingHero";
import RisingText from "@/components/RisingText";

export default function Home() {
    return (
        <div className="flex flex-col justify-center gap-[8vw]">
            <DanglingHero />

            <div className="ml-auto mr-[3.5vw] w-[81vw] max-w-[1230px]">
                <RisingText 
                    text = "Brent Mayes is a Computer Science Engineering student at the University of Michigan, focusing on software engineering and security. As an Information Security Intern at MillerKnoll, he helped bolster the organization's cloud security posture by engineering and deploying automated remediation solutions. He values thoughtful design, a sensibility that aligns with MillerKnoll's heritage as the merger of two legendary design houses. When not coding, he's likely playing guitar, listening to prog rock, reading Dostoevsky, or doing some other pretentious thing like that."
                    className="text-left lowercase font-bold tracking-tight leading-tight [font-size:clamp(12px,2vw,30px)]"
                />
            </div>
        </div>
    );
}