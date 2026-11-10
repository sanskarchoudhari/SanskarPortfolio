import {
    FaReact,
    FaWordpress,
    FaShopify,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiSupabase,
    SiPostgresql,
    SiMongodb,
} from "react-icons/si";

export const experiences = [
    {
        id: 1,
        company: "Valentiz Venture Services Pvt. Ltd.",
        role: "Full Stack Developer",
        duration: "July 2025 - Present",
        location: "Chandrapur",
        type: "Full Time",

        technologies: [
            { name: "React.js", icon: FaReact },
            { name: "Supabase", icon: SiSupabase },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],

        project: "HR Management Web Application",

        description:
            "Developing scalable business applications and HR management systems using React.js and Supabase.",

        achievements: [
            "Developed Employee Management System",
            "Created Admin Dashboard",
            "Implemented Role-Based Authentication",
            "Integrated PostgreSQL Database",
            "Optimized application performance",
            "Performed testing and QA validation",
        ],
    },

    {
        id: 2,
        company: "Tzar Digital Marketing Agency",
        role: "Web Developer",
        duration: "July 2023 - Nov 2024",
        location: "Remote (Mumbai)",
        type: "Full Time",

        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "React.js", icon: FaReact },
            { name: "WordPress", icon: FaWordpress },
        ],

        project: "TZAR Company Website",

        description:
            "Developed business websites and production-ready web applications for multiple clients.",

        achievements: [
            "Developed official company website",
            "Built React.js applications",
            "Created responsive WordPress websites",
            "Customized Shopify stores",
            "Managed production deployments",
            "Improved website performance",
        ],
    },

    {
        id: 3,
        company: "Sky Vision IT Solutions",
        role: "Web Developer Intern",
        duration: "Nov 2022 - May 2023",
        location: "Nagpur",
        type: "Internship",

        technologies: [
            { name: "WordPress", icon: FaWordpress },
            { name: "Shopify", icon: FaShopify },
        ],

        project: "Client Business Websites",

        description:
            "Worked on WordPress and Shopify websites for company and business clients.",

        achievements: [
            "Customized WordPress themes",
            "Designed Elementor websites",
            "Created responsive layouts",
            "Maintained client websites",
            "Learned production workflows",
        ],
    },
];