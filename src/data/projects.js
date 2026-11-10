import hrmsImage from "../assets/projects/tzar.png";
import tzarImage from "../assets/projects/tzar.png";
import blue7vetsImage from "../assets/projects/tzar.png";
import unazoImage from "../assets/projects/tzar.png";
import lfcsmauImage from "../assets/projects/tzar.png";
import diyGuruImage from "../assets/projects/tzar.png";
import mahaarajaaImage from "../assets/projects/tzar.png";

export const projects = [
  {
    id: 1,
    title: "HR Management System",
    category: "React.js",
    type: "Full Stack Application",
    image: hrmsImage,

    description:
      "A web-based HR management application with employee management, dashboard functionalities, authentication and database integration.",

    technologies: [
      "React.js",
      "Supabase",
      "PostgreSQL",
    ],

    features: [
      "Employee Management",
      "Admin Dashboard",
      "Role-Based Authentication",
      "Database Integration",
    ],

    live: "",
    github: "",
    featured: true,
  },

  {
    id: 2,
    title: "TZAR Company Website",
    category: "Next.js",
    type: "Business Website",
    image: tzarImage,

    description:
      "Official company website developed with Next.js and MongoDB, focusing on modern UI, responsive layouts and production deployment.",

    technologies: [
      "Next.js",
      "MongoDB",
      "JavaScript",
    ],

    features: [
      "Responsive UI",
      "Dynamic Content",
      "Modern Design",
      "Production Deployment",
    ],

    live: "https://tzar.co",
    github: "",
    featured: true,
  },

  {
    id: 3,
    title: "Blue7Vets",
    category: "WordPress",
    type: "Business Website",
    image: blue7vetsImage,

    description:
      "A responsive business website developed and customized using WordPress with a focus on user experience.",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],

    features: [
      "Custom Website Design",
      "Responsive Layout",
      "WordPress Customization",
    ],

    live: "https://blue7vets.com",
    github: "",
    featured: false,
  },

  {
    id: 4,
    title: "Unazo Global",
    category: "WordPress",
    type: "Business Website",
    image: unazoImage,

    description:
      "Business website developed using WordPress and Elementor with responsive layouts and customized sections.",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],

    features: [
      "Custom Sections",
      "Responsive Design",
      "Theme Customization",
    ],

    live: "https://unazo.global",
    github: "",
    featured: false,
  },

  {
    id: 5,
    title: "Little Flower School",
    category: "WordPress",
    type: "Educational Website",
    image: lfcsmauImage,

    description:
      "An educational website built using WordPress with customized pages and responsive layouts.",

    technologies: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
    ],

    features: [
      "Educational Pages",
      "Responsive Design",
      "Content Management",
    ],

    live: "https://lfcsmau.co",
    github: "",
    featured: false,
  },

  {
    id: 6,
    title: "DIY Guru",
    category: "WordPress",
    type: "Business Website",
    image: diyGuruImage,

    description:
      "A customized WordPress website designed to provide a user-friendly browsing experience.",

    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
    ],

    features: [
      "Website Customization",
      "Responsive Layout",
      "UI Development",
    ],

    live: "https://diyguru-mumbai.org",
    github: "",
    featured: false,
  },

  {
    id: 7,
    title: "Mahaarajaa",
    category: "Shopify",
    type: "E-Commerce Website",
    image: mahaarajaaImage,

    description:
      "An e-commerce storefront developed using Shopify with customized theme sections and responsive product pages.",

    technologies: [
      "Shopify",
      "Liquid",
      "HTML",
      "CSS",
    ],

    features: [
      "E-Commerce Storefront",
      "Theme Customization",
      "Product Pages",
      "Responsive Design",
    ],

    live: "https://mahaarajaa.life",
    github: "",
    featured: false,
  },
];