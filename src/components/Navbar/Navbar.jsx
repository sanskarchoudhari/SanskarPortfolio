import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Skills",
        href: "#skills",
    },
    {
        title: "Experience",
        href: "#experience",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-bluer-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="#"
                        className="text-2xl font-bold text-white" >
                        Sanskar<span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop Menu */}

                    <nav className=" hidden md:flex gap-8">
                        {navLinks.map((item) => (
                            <a key={item.title}
                                href={item.href}
                                className="text-slate-300 hover:text-blue-500 transition duration-300">
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    {/* Resume Button */}

                    <a href="/resume.gif"
                        target="_blank"
                        className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition">
                        Resume
                    </a>

                    {/* Mobile Menu Button */}

                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-2xl" >

                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (
                    <div className="md:hidden pb-5">
                        <div className="flex flex-col gap-5">
                            {navLinks.map((item) => (

                                <a key={item.title}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-slate-300 hover:text-blue-500">
                                    {item.title}
                                </a>

                            ))}

                            <a href="/resume.pdf"
                                target="_blank"
                                className="bg-blue-600 text-center py-2 rounded-lg">
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );

}

export default Navbar;