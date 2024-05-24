import { useState } from "react";
import { HERO_CONTENT } from "../constants";
import profileVideo from "../assets/profileVideo.mp4";
import { motion } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa6";

const Container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = document.getElementById("profileVideo");
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2
                            variants={Container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Baibhav Singh
                        </motion.h2>

                        <motion.span
                            variants={Container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            variants={Container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8 relative">
                    <div className="flex justify-center">
                        <motion.video
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="rounded"
                            src={profileVideo}
                            id="profileVideo"
                            alt=""
                            onClick={togglePlay}
                        />

                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            onClick={togglePlay}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white rounded-full p-2 focus:outline-none"
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
