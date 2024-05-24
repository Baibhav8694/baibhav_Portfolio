/* eslint-disable react/prop-types */
import logo from "../assets/baibhav.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = ({ onClickImage }) => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="mx-2 w-16 h-16 rounded-full"
                    src={logo}
                    alt="Logo"
                    onClick={onClickImage}
                />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/baibhav-singh-b954a319a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.github.com/baibhav8694"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/baibhav_04"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.leetcode.com/baibhavsingh82"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TbBrandLeetcode />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
