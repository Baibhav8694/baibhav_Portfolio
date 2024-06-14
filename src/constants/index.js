import fileSharing from "../assets/projects/fileSharing.png";
import taskManager from "../assets/projects/taskManager.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import microsoftCertificate from "../assets/certifications/microsoftCertificate.png";
import yhillsIntern from "../assets/certifications/yhillsIntern.png";
import yhillsCourse from "../assets/certifications/yhillsCourse.png";
import accenture from "../assets/certifications/accenture.png";
import restApi from "../assets/certifications/restApi.png";

import img1 from "../assets/aboutPiccs/img1.jpg";
import img2 from "../assets/aboutPiccs/img2.jpg";
import img3 from "../assets/aboutPiccs/img3.jpg";
import img4 from "../assets/aboutPiccs/img4.jpg";
import img5 from "../assets/aboutPiccs/img5.jpg";
import img6 from "../assets/aboutPiccs/img6.jpg";
import img7 from "../assets/aboutPiccs/img7.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.Looking to gain hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. I am looking forward to serve a company that has positive impact on society.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_PICS = [img1, img2, img3, img4, img5, img6, img7];
export const EXPERIENCES = [
    {
        year: "Septemper 2023 - October 2023",
        role: "Full Stack Developer Intern",
        company: "CODSOFT Techonologies",
        description: ` Revamped the landing page design through proficient application of HTML and CSS, establishing clear columns,
        segmenting sections for clarity, arranging elements strategically, and integrating distinctive headers and footers; boosted
        user interaction and drove a 30% rise in lead generation`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "July 2023 - August 2023",
        role: "Frontend Developer Virtual Internship Accenture",
        company: "Accenture",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "January 2023 - Feb 2023",
        role: "Data Scientist Trainiee",
        company: "Yhills",
        description: `Performed exploratory data analysis on datasets provided to me. Identified key performance indicators and attributes that effect the data significantly. Trained various machine learning algroithms using scikit-learn and compared their efficiences on the dataset.`,
        technologies: [
            "Python",
            "Numpy",
            "Pandas",
            "Seaborn",
            "Scikit-Learn",
            "Machine-Learning",
        ],
    },
    {
        year: "October 2022",
        role: "Campus Ambassador Intern",
        company: "Yhills",
        description: `Utilized digital and social media platforms for lead generation and revenue generation.
        Boosted Yhill’s online presence, increasing followers by 2.4 percent through content creation and datadriven strategies`,
        technologies: ["Excel", "Communication", "Leadership"],
    },
];

export const PROJECTS = [
    {
        title: "File-Sharing Web Api",
        image: fileSharing,
        link: "https://github.com/Baibhav8694/FilesharingInshare",
        description:
            "Developed a cutting-edge file sharing web API similar to Google Drive, enabling seamless sharing of files with unlimited recipients. It generates a link of the shared file and can also send the link through email. One can upload one file of max size 100MB at a time using this a platform.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Task Management App",
        image: taskManager,
        link: "https://github.com/Baibhav8694/TaskManagement/tree/master",
        description:
            "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["HTML", "CSS", "React.js"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        link: "#",
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
        title: "Blogging Platform",
        image: project4,
        link: "#",
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["HTML", "CSS", "React.js", "Express", "mySQL"],
    },
];

export const EDUCATION = [
    {
        qualification: "Bachelor Of  Electrical Power Enginerring",
        college: "Jadavpur University",
        year: "Aug 2020 - May 2024",
        percentage: "8.8 SGPA",
        subjects: [
            "Electrical Enginnering",
            "DBMS",
            "Ooops",
            "SQL",
            "Non-Conventional Energy",
        ],
    },
    {
        qualification: "Higher Secondary",
        college: "St. Anthony's Convent School",
        year: "Aug 2017 - May 2019",
        percentage: "88.4%",
        subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
    },
    {
        qualification: "High School",
        college: "Sunrise English School",
        year: "Aug 2009 - May 2015",
        percentage: "89.4%",
        subjects: [
            "Physics",
            "Chemistry",
            "Biology",
            "Mathematics",
            "English",
            "Economics",
        ],
    },
];

export const CERTIFICATIONS = [
    {
        title: "Rest Api Certificate",
        year: "August 2023",
        description:
            "Completed challenges regarding data fetching, data retrieval from a given link and performed various actions according to the questions mentioned on the website.",
        image: restApi,
    },
    {
        title: "Accenture Developer Simulation",
        year: "September, 2023",
        description:
            "Completed developer job simulation at accenture with the help of forage. Completed task such as defining technical requirements, looking for bugs, optimising code, reading and understanding the code.",
        image: accenture,
    },
    {
        title: "Microsoft Technology Associate",
        year: "February 14, 2022",
        description:
            "Completed introduction to python programming. I also passed a microsoft associate exam inorder to achieve this certificate. In this course I wass introduced to python programming and various python modules.",
        image: microsoftCertificate,
    },
    {
        title: "Yhills Intern",
        year: "January 2022",
        description:
            "In this internship, I was assigned with two datasets where I trained some Machine Learning algroithms on the given datasets. Befor this I carried out data preprocessing and data cleaning using python and it's modules",
        image: yhillsIntern,
    },
    {
        title: "Yhills Course Completion",
        year: "2021",
        description:
            "Completed two months of training at Yhills on Machine Learning with Python.",
        image: yhillsCourse,
    },
];

export const CONTACT = {
    address:
        "RA-352, Nabapally, Salt Lake Sector 4, Kolkata, 700098, West Bengal",
    phoneNo: "+91 8159945424",
    email: "baibhavsingh82@gmail.com",
};
