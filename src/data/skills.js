import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaWordpress,
    FaShopify,
    FaCode,
} from "react-icons/fa";

import {
    SiJavascript,
    SiNextdotjs,
    SiExpress,
    SiPostgresql,
    SiSupabase,
    SiFirebase,
    SiMongodb,
    SiTailwindcss,
    SiPostman,
} from "react-icons/si";

export const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", icon: FaReact, level: 90 },
            { name: "Next.js", icon: SiNextdotjs, level: 85 },
            { name: "JavaScript", icon: SiJavascript, level: 90 },
            { name: "HTML5", icon: FaHtml5, level: 95 },
            { name: "CSS3", icon: FaCss3Alt, level: 90 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
            { name: "Bootstrap", icon: FaBootstrap, level: 90 },
        ],
    },

    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", icon: FaNodeJs, level: 75 },
            { name: "Express.js", icon: SiExpress, level: 75 },
        ],
    },

    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
            { name: "Supabase", icon: SiSupabase, level: 85 },
            { name: "Firebase", icon: SiFirebase, level: 75 },
            { name: "MongoDB", icon: SiMongodb, level: 70 },
        ],
    },

    {
        title: "CMS & Tools",
        skills: [
            { name: "WordPress", icon: FaWordpress, level: 95 },
            { name: "Shopify", icon: FaShopify, level: 85 },
            { name: "Git", icon: FaGitAlt, level: 85 },
            { name: "GitHub", icon: FaGithub, level: 85 },
            { name: "Postman", icon: SiPostman, level: 80 },
            { name: "VS Code", icon: FaCode, level: 95 },
        ],
    },
];