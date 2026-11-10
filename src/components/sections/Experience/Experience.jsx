import { experiences } from "../../../data/experience";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
    return (
        <section
            id="experience"
            className="bg-slate-900 py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="text-blue-500 font-medium">
                        Career Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Work Experience
                    </h2>

                    <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
                        My professional journey in frontend, full stack,
                        and CMS development across startups and business projects.
                    </p>

                </div>

                {/* Timeline */}

                <div className="space-y-10">

                    {experiences.map((job) => (

                        <div
                            key={job.id}
                            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
                        >

                            {/* Top */}

                            <div className="flex flex-col lg:flex-row justify-between gap-5">

                                <div>

                                    <div className="flex items-center gap-3 mb-3">

                                        <FaBriefcase className="text-blue-500 text-xl" />

                                        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                                            {job.type}
                                        </span>

                                    </div>

                                    <h3 className="text-3xl font-bold">
                                        {job.role}
                                    </h3>

                                    <h4 className="text-xl text-blue-500 mt-2">
                                        {job.company}
                                    </h4>

                                    <p className="text-slate-400 mt-2">
                                        {job.duration} • {job.location}
                                    </p>

                                </div>

                                {/* Project */}

                                <div className="bg-slate-900 rounded-2xl p-5 lg:w-80">

                                    <h5 className="text-blue-500 font-semibold mb-2">
                                        Key Project
                                    </h5>

                                    <p className="font-semibold">
                                        {job.project}
                                    </p>

                                    <p className="text-slate-400 mt-3 text-sm">
                                        {job.description}
                                    </p>

                                </div>

                            </div>

                            {/* Tech */}

                            <div className="flex flex-wrap gap-4 mt-8">

                                {job.technologies.map((tech) => {

                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full"
                                        >
                                            <Icon className="text-blue-500" />

                                            <span>{tech.name}</span>

                                        </div>
                                    );
                                })}

                            </div>

                            {/* Achievements */}

                            <div className="grid md:grid-cols-2 gap-4 mt-8">

                                {job.achievements.map((item) => (

                                    <div
                                        key={item}
                                        className="flex gap-3 items-start"
                                    >

                                        <div className="mt-2 w-2 h-2 rounded-full bg-blue-500"></div>

                                        <p className="text-slate-300">
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experience;