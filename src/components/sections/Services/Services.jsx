
import React from "react";
import {
  FaCode,
  FaWordpress,
  FaShoppingCart,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Custom Web Development",
    description:
      "Building modern, scalable, and responsive websites using React.js, Next.js, and modern frontend technologies.",
    technologies: ["React.js", "Next.js", "JavaScript"],
  },
  {
    id: 2,
    icon: <FaWordpress />,
    title: "WordPress Development",
    description:
      "Creating professional business websites with custom themes, Elementor, and easy-to-manage content.",
    technologies: ["WordPress", "Elementor", "PHP"],
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "E-commerce Development",
    description:
      "Developing user-friendly online stores with product management, responsive layouts, and shopping functionality.",
    technologies: ["Shopify", "WooCommerce"],
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "Responsive UI Development",
    description:
      "Converting UI designs and wireframes into pixel-perfect interfaces that work across mobile, tablet, and desktop.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: "API & Database Integration",
    description:
      "Integrating REST APIs, authentication, and database-driven functionality into web applications.",
    technologies: ["Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    id: 6,
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Improving website performance, fixing bugs, updating content, and maintaining existing web applications.",
    technologies: ["Debugging", "Optimization", "Git"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            What I Offer
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            My <span className="text-blue-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I help businesses and individuals build modern digital
            experiences through creative design, clean code, and
            reliable web development solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-900"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 min-h-[84px] text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-all hover:gap-3 hover:text-blue-400"
              >
                Discuss a Project
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-slate-900 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Let's work together to turn your ideas into a professional
            and engaging digital experience.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition-all hover:bg-blue-700"
          >
            Let's Talk
            <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
