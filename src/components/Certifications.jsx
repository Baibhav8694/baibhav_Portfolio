import { CERTIFICATIONS } from "../constants/index";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Certifications = () => {
    return (
        <>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-5 text-center text-4xl"
            >
                Certifications
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 150 }}
                transition={{ duration: 2 }}
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {CERTIFICATIONS.map((certificate, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                            data-bs-interval="2000"
                        >
                            <img
                                src={certificate.image}
                                className="d-block w-100"
                                alt={
                                    certificate.name ||
                                    `Certificate ${index + 1}`
                                }
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </motion.div>
        </>
    );
};

export default Certifications;
