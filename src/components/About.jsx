import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import resume from "../assets/Documents/resumeBaibhav.pdf";
import img1 from "../assets/aboutPiccs/img1.jpg";
import img2 from "../assets/aboutPiccs/img2.jpg";
import img3 from "../assets/aboutPiccs/img3.jpg";
import img4 from "../assets/aboutPiccs/img4.jpg";
import img5 from "../assets/aboutPiccs/img5.jpg";
// import img6 from "../assets/aboutPiccs/img6.jpg";
// import img7 from "../assets/aboutPiccs/img7.jpg";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="1000"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={img1}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={img2}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={img3}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={img4}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={img5}
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <p>{ABOUT_TEXT}</p>
                    <div className="mt-8 text-center">
                        <a
                            href={resume}
                            target="_blank"
                            className="bg-neutral-900 text-purple-500 py-2 px-4 rounded hover:bg-neutral-600 hover:text-white transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
