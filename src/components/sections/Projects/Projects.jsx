import { useState } from "react";

import { projects } from "../../../data/projects";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const filters = [
  "All",
  "React.js",
  "Next.js",
  "WordPress",
  "Shopify",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-14">

          <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm">
            My Recent Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            A collection of web applications, business websites
            and e-commerce solutions I've developed using
            modern web technologies.
          </p>

        </div>

        {/* Project Filters */}

        <div className="flex flex-wrap justify-center gap-3 mb-14">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-blue-500"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project) => (

            <article
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}

              <div className="relative overflow-hidden aspect-[16/10] bg-slate-800">

                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {project.featured && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                )}

                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live website`}
                      className="bg-white text-slate-950 p-4 rounded-full hover:bg-blue-500 hover:text-white transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}

                </div>

              </div>

              {/* Project Details */}

              <div className="p-6">

                <div className="flex justify-between items-center gap-3 mb-3">

                  <span className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>

                  <span className="text-slate-500 text-xs">
                    {project.type}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3 min-h-[72px]">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Features */}

                <div className="border-t border-slate-800 mt-6 pt-5">

                  <h4 className="text-sm font-semibold mb-3">
                    Key Features
                  </h4>

                  <div className="space-y-2">

                    {project.features.slice(0, 3).map((feature) => (

                      <p
                        key={feature}
                        className="text-slate-400 text-sm flex items-center gap-2"
                      >
                        <span className="text-blue-500">✓</span>
                        {feature}
                      </p>

                    ))}

                  </div>

                </div>

                {/* Links */}

                <div className="flex items-center gap-5 mt-6 pt-4">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      Live Preview
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <p className="text-slate-400 mb-5">
            Interested in working together on your next project?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition"
          >
            Let's Work Together
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;