
import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution:
      "VMV Commerce JMT Arts & JJP Science College, Nagpur",
    duration: "2021 - 2023",
    score: "84%",
    description:
      "Postgraduate studies focused on computer applications, software development, programming, database management, and modern IT technologies.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "Sardar Patel Mahavidyalaya, Chandrapur",
    duration: "2018 - 2021",
    score: "69%",
    description:
      "Undergraduate studies covering programming fundamentals, web technologies, database concepts, and computer science.",
    icon: <FaUniversity />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            My Academic Background
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Education & <span className="text-blue-500">Qualifications</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My academic journey has helped me build a strong foundation
            in computer science, programming, and software development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent sm:left-8" />

          <div className="space-y-10">
            {educationData.map((education) => (
              <div
                key={education.id}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-900 bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20 sm:left-2 sm:h-12 sm:w-12">
                  {education.icon}
                </div>

                {/* Education Card */}
                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 sm:p-8">

                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
                      {education.duration}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-400">
                      <FaAward />
                      {education.score}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-white sm:text-xl">
                    {education.degree}
                  </h3>

                  <div className="mb-4 flex items-start gap-2 text-sm text-blue-400">
                    <FaUniversity className="mt-1 shrink-0" />
                    <span>{education.institution}</span>
                  </div>

                  <p className="text-sm leading-7 text-slate-400">
                    {education.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Card */}
        <div className="mt-16 rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center sm:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-500">
            <FaBookOpen />
          </div>

          <h3 className="text-2xl font-bold text-white">
            Continuous Learning
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            I believe in continuous learning and improving my technical
            skills by exploring modern web technologies, building projects,
            and staying updated with industry trends.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
