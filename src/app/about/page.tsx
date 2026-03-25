export const metadata = {
    title: "about",
};

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
                                target="_blank"
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
                                <li>Dean&apos;s List</li>
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
                        {/* PayPal */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">PayPal</h3>
                                <span className="text-sm">Scottsdale, AZ</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="italic mb-2">Incoming Cyber Defense Intern</h3>
                                <span className="text-sm">May 2026 - Aug. 2026</span>
                            </div>
                        </div>
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
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Drove NetSuite ERP user access review (UAR), identifying role ownership and implementing Jira-based validation access request workflow, enhancing GRC compliance posture and internal controls for future role-based access control (RBAC).</li>
                                <li>Engineered and deployed organization-wide Wiz Remediation & Response (R&R) Deployment across 63 AWS accounts, establishing one-click and automated remediation for cloud configuration issues, bolstering org’s cloud security posture.</li>
                                <li>Developed Jira integration for Wiz remediation actions, ensuring real-time issue resolution tracking & audit trail generation.</li>
                                <li>Selected for internship extension as part-time contractor to assist with SOX auditing automation within OneTrust.</li>
                            </ul>
                        </div>
                        {/* Northpointe */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">Northpointe Behavioral Healthcare System</h3>
                                <span className="text-sm">Kingsford, MI</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="italic mb-2">Information Systems Intern</h3>
                                <span className="text-sm">Jan. 2024 - June 2024</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Developed synchronization service integrating SaaS payroll and employee database with on-prem data lake via webhooks and RESTful API calls, dynamically updated employee records and securely handled authentication.</li>
                                <li>Migrated data across NAS systems to enhance workstation performance and connectivity.</li>
                            </ul>
                        </div>
                        {/* Trident Maritime Systems, LLC */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">Trident Maritime Systems, LLC</h3>
                                <span className="text-sm">Kingsford, MI</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="italic mb-2">Information Systems Technician</h3>
                                <span className="text-sm">Jan. 2023 - Oct. 2023</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6 mb-1">
                                <li>Led the national implementation and support of PrinterLogic, a printer management system across 50+ US locations.</li>
                                <li>Closed more than 200 tickets over the 2023 summer alone, managing the majority of printer, VOIP, and ERP support issues.</li>
                                <li>Developed, documented, and deployed a software patch that repaired Microsoft Teams Rooms across several locations.</li>
                                <li>Configured and implemented network maps for PRTG network monitoring software.</li>
                                <li>Retained and transitioned to Info. Systems Tech role based on strong performance as Database Admin (DBA) Intern.</li>
                            </ul>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="italic mb-2">Database Administration Intern</h3>
                                <span className="text-sm">June 2022 - Jan. 2023</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li>Engineered full-stack solutions for internal IT webpages, facilitating CRUD operations via SQL stored procedures.</li>
                                <li>Imported the entirety of a deprecated MariaDB database into the current MS SQL database.</li>
                                <li>Standardized data from acquired locations following ACID principles for database integration.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technical Projects */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">technical projects</h2>
                    <div className="space-y-6 pl-6">
                        {/* This site */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">Personal Website (this site!)</h3>
                                <span className="text-sm">Oct. 2023 - Present</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li><em>Tech stack:</em> Next.js, React, Tailwind CSS, TypeScript, Figma.</li>
                                <li>Designed in Figma, development streamlined with Next.js, React, and Tailwind.</li>
                                <li>Exported with SSG for hosting on cPanel.</li>
                            </ul>
                        </div>
                        {/* StudentVerifer */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">StudentVerifer</h3>
                                <span className="text-sm">Jan. 2025 - Apr. 2025</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li><em>Tech stack:</em> Python, PostgreSQL, smtplib, discord.py, psycopg2.</li>
                                <li>Built a Discord bot to verify University of Michigan students via the MCommunity API and student emails.</li>
                                <li>Used an SMTP server to send one-time codes with smtplib.</li>
                                <li>Linked Discord User IDs to student emails with PostgresSQL to prevent duplicate accounts.</li>
                            </ul>
                        </div>
                        {/* Norway Living Hope Website */}
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-semibold">Local Church Website</h3>
                                <span className="text-sm">Oct. 2023 - Jan. 2024</span>
                            </div>
                            <ul className="list-disc space-y-1 pl-6">
                                <li><em>Tech stack:</em> WordPress, Webflow.</li>
                                <li>Volunteered and consulted to develop SEO-optimized WordPress website for local church.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">skills</h2>
                    <ul className="list-disc space-y-1 pl-6">
                        <li><b>Software Engineering:</b> C++, C, C#, Python, TypeScript, SQL (T-SQL, MySQL), LaTeX, Bash, VSCode, Git, Docker, Jira, Confluence, Postman, Figma, npm, pip</li>
                        <li><b>Cloud and Information Security:</b> AWS, Wiz, OneTrust, OneLogin, SOX Compliance, CSPM</li>
                        <li><b>Cybersecurity:</b> Ghidra, Binary Ninja, Burp Suite, Wireshark, OpenSSL, nmap, many many CTFs</li>
                        <li><b>Systems and Infrastructure:</b> Windows Server, Linux, AD, GP, Hyper-V, MS SQL, VLANs, TCP/IP, SMTP</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}