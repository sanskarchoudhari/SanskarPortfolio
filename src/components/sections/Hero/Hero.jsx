import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

import profileImage from "../../../assets/images/profile.png";
import resumePDF from "../../../assets/resume/Sanskar_Choudhari_Resume.pdf";

function Hero() {
    return (
        <>
            <section
                id="home"
                className="min-h-screen bg-slate-950 flex items-center"
            >
                <div className="max-w-7xl mx-auto px-6 py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}

                        <div>
                            <p className="text-blue-500 font-medium mb-4">
                                Hello, I'm
                            </p>

                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Sanskar
                                <span className="text-blue-500"> Choudhari</span>
                            </h1>

                            <div className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300 h-16">
                                <TypeAnimation
                                    sequence={[
                                        "Full Stack Developer",
                                        2000,
                                        "React.js Developer",
                                        2000,
                                        "WordPress Developer",
                                        2000,
                                        "Frontend Engineer",
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>

                            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-xl">
                                Full Stack Developer experienced in building
                                scalable web applications using React.js,
                                Next.js, Supabase, PostgreSQL and WordPress.
                                Passionate about creating responsive,
                                high-performance digital experiences.
                            </p>

                            {/* Buttons */}

                            <div className="flex flex-wrap gap-4 mt-10">
                                {/* <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
                                >
                                    <FaDownload />
                                    Download Resume
                                </a> */}
                                <a
                                    href={resumePDF}
                                    download="Sanskar_Choudhari_Resume.pdf"
                                    className="inline-flex items-center gap-2 rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
                                >
                                    Download Resume
                                </a>

                                <a
                                    href="#contact"
                                    className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl transition"
                                >
                                    Hire Me
                                </a>
                            </div>

                            {/* Social Links */}

                            <div className="flex gap-5 mt-10">
                                <a
                                    href="https://linkedin.com/in/sanskar-choudhari-90237021a/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl hover:text-blue-500 transition"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="mailto:sanskarchoudhari1122@gmail.com"
                                    className="text-2xl hover:text-blue-500 transition"
                                >
                                    <FaEnvelope />
                                </a>

                            </div>
                        </div>

                        {/* Right Image */}

                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

                                <img src={profileImage}
                                    alt="Sanskar Choudhari"
                                    className="relative w-[320px] md:w-[420px] rounded-3xl border border-slate-800 shadow-2xl" />

                            </div>
                        </div>

                        {/* Stats */}

                        <div className="grid grid-cos-2 md:grid-cols-4 gap-5 mt-24">

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-blue-500">2+</h3>
                                <p className="text-slate-400 mt-2">
                                    Years Experience
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">

                                <h3 className="text-3xl font-bold text-blue-500">
                                    15+
                                </h3>
                                <p className="text-slate-400 mt-2">
                                    Projects Completed
                                </p>

                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-blue-500">
                                    10+
                                </h3>
                                <p className="text-slate-400 mt-2">
                                    Technologies
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-blue-500">
                                    100%
                                </h3>
                                <p className="text-slate-400 mt-2">
                                    Responsive Design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Hero;