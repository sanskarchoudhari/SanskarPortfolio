import Navbar from "../Navbar/Navbar";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";


function MainLayout() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience/>
            <Projects/>

            {/* <main className="pt-20">
                <div className="h-screen flex items-center justify-center">
                    Hero Section Coming Next
                </div>
            </main> */}
        </>
    );
}

export default MainLayout;