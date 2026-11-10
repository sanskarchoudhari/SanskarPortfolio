import { skillCategories } from "../../../data/skills";

function Skills() {
    return (
        <>
            <section id="skills"
                className="bg-slate-950 py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}

                    <div className="text-center mb-16">
                        <p className="text-blue-500 font-medium">My Expertise</p>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">
                            Skills & Technology Stack
                        </h2>

                        <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
                            I enjoy building modern web applications using
                            frontend technologies, scalable backend solutions,
                            databases, and CMS platforms while following
                            clean coding practices.
                        </p>
                    </div>

                    {/* Categories */}

                    <div className="space-y-12">

                        {skillCategories.map((category) => (
                            <div key={category.title}>
                                <h3 className="text-2xl font-semibold mb-8 text-blue-500">
                                    {category.title}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols gap-6">
                                    {category.skills.map((skill) => {
                                        const Icon = skill.icon;

                                        return (
                                            <div key={skill.name}
                                                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-between mb-5">
                                                    <div className="flex items-center gap-3">
                                                        <Icon className="text-3xl text-blue-500" />
                                                        <h4 className="font-semibold">
                                                            {skill.name}
                                                        </h4>
                                                    </div>
                                                    <span className="text-sm text-slate-400">
                                                        {skill.level}%
                                                    </span>

                                                </div>
                                                {/* Progress */}

                                                <div className="w-full bg-slate-700 rounded-full h-2">
                                                    <div className="bg-blue-500 h-2 rounded-full"
                                                        style={{ width: `${skill.level}%`, }}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
export default Skills;