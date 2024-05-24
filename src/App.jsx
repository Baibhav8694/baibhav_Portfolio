import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Display from "./components/Display";
import Certifications from "./components/Certifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

const App = () => {
    const [zoomImage, setZoomImage] = useState(false);

    const handleOnClick = () => {
        setZoomImage(true);
    };

    const handleClose = () => {
        setZoomImage(false);
    };

    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-8">
                <CSSTransition
                    in={zoomImage}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <Display onClose={handleClose} />
                </CSSTransition>
                <CSSTransition
                    in={!zoomImage}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div>
                        <Navbar onClickImage={handleOnClick} />
                        <Hero />
                        <About />
                        <Technologies />
                        <Experience />
                        <Project />
                        <Education />
                        <Certifications />
                        <Contact />
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default App;
