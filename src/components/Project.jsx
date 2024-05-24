import { useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Project = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredIndex(null);
        }, 2000); // 2 seconds
    };
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                {" "}
                Projects{" "}
            </motion.h2>
            <div>
                {PROJECTS.map((projects, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={projects.image}
                                height={150}
                                width={150}
                                className="mb-6 rounded padding"
                                onMouseEnter={() => {
                                    handleMouseEnter(index);
                                }}
                                onMouseLeave={handleMouseLeave}
                                style={{ height: "90px" }}
                            ></img>
                            {hoveredIndex === index && (
                                <button type="button" className="btn btn-light">
                                    <a
                                        href={projects.link}
                                        target=" "
                                        className="font-medium text-purple-800"
                                    >
                                        View Code
                                    </a>
                                </button>
                            )}
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                            onMouseEnter={() => {
                                handleMouseEnter(index);
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h6 className="font-semibold">{projects.title}</h6>
                            <p className="mb-4 text-neutral-400 pt-5 pb-3">
                                {projects.description}
                            </p>

                            {projects.technologies.map((tech, index) => (
                                <span
                                    className="mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    key={index}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
