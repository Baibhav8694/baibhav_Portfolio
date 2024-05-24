/* eslint-disable react/prop-types */
import logo from "../assets/baibhav.jpg";

const Display = ({ onClose }) => {
    return (
        <div
            className="border-b border-neutral-900 pb-4 lg:mb-35 flex items-center justify-center min-h-screen"
            onClick={onClose}
        >
            <div className="flex flex-wrap items-center justify-center w-full lg:w-1/2">
                <img
                    className="w-64 h-64 rounded-full transform scale-150 transition-transform duration-500"
                    src={logo}
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default Display;
