import { title } from "framer-motion/client";
import { FaCode, FaLaptopCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import resumePDF from "../../../assets/resume/Sanskar_Choudhari_Resume.pdf";

function About() {
    const highlights = [
        {
            icon: <FaBriefcase />,
            title: "Experience",
            value: "2+ Years",
        },
        {
            icon: <FaCode />,
            title: "Projects",
            value: "15+ Completed",
        },
        {
            icon: <FaLaptopCode />,
            title: "Tech Stack",
            value: "React, Next, Supabase",
        },
        {
            icon: <FaGraduationCap />,
            title: "Education",
            value: "MCA - 84%",
        },
    ];
    return (
        <>
            <section id="about" className="bg-slate-900 py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}

                    <div className="text-center mb-16">
                        <p className="text-blue-500 font-medium mb-3">Get To Know More</p>

                        <h2 className="text-4xl md:text-5-xl font-bold">
                            About Me
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* Left Side */}
                        <div>
                            <h3 className="text-3xl font-bold mb-6">
                                Full Stack Developer &
                                <span className="text-blue-500">
                                    {" "}React.js Specialist

                                </span>

                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-6">
                                I'm a passionate Full Stack Developer with
                                experience building scalable web applications,
                                business websites, dashboards, and CMS-based
                                solutions using React.js, Next.js, Supabase,
                                PostgreSQL, WordPress, and Shopify.
                            </p>

                            <p className="text-slate-400 leading-relaxed mb-6">
                                Currently working at Valentiz Venture Services
                                Pvt. Ltd., where I contribute to developing
                                business applications, employee management
                                systems, and modern web solutions focused on
                                performance, usability, and clean architecture.
                            </p>

                            <p className="text-slate-400 leading-relaxed">
                                My goal is to create digital products that
                                combine excellent user experience with robust
                                backend functionality while maintaining clean,
                                maintainable code.
                            </p>

                            {/* <a href="/resume.pdf"
                                target="_blank"
                                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
                            >
                                Download Resume
                            </a> */}

                            <a
                                href={resumePDF}
                                download="Sanskar_Choudhari_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
                            >
                                Download Resume
                            </a>
                        </div>
                        {/* Right Side Cards */}

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index}
                                    className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
                                >
                                    <div className="text-3xl text-blue-500 mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Timeline */}

                    <div className="mt-20">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            My Journey
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                                <span className="text-blue-500 font-bold">
                                    2021
                                </span>
                                <h4 className="text-xl font-semibold mt-3 mb-3">
                                    B.Sc Information Technology
                                </h4>
                                <p className="text-slate-400">
                                    Completed Bachelor's Degree from
                                    Sardar Patel Mahavidyalaya,
                                    Chandrapur.
                                </p>
                            </div>

                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                                <span className="text-blue-500 font-bold">
                                    2023
                                </span>
                                <h4 className="text-xl font-semibold mt-3 mb-3">
                                    MCA Graduation
                                </h4>
                                <p className="text-slate-400">
                                    Completed Master of Computer
                                    Applications with 84% from
                                    VMV College, Nagpur.
                                </p>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                                <span className="text-blue-500 font-bold">
                                    Present
                                </span>

                                <h4 className="text-xl font-semibold mt-3 mb-3">
                                    Full Stack Developer
                                </h4>

                                <p className="text-slate-400">
                                    Building scalable web applications
                                    using React.js, Supabase,
                                    PostgreSQL and modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default About;