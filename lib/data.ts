import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { DiPython } from "react-icons/di";
import corpcommentImg from "@/public/avatar.png";
import sidehustlerImg from "@/public/sidehustler.png";
import rmtdevImg from "@/public/background.png";
import wordanalyticsImg from "@/public/CMS.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Cornell University",
    location: "Ithaca, NY",
    description:
      "Currently studying computer science at Cornell, I will graduate in May 2025",
    icon: React.createElement(LuGraduationCap),
    date: "September 2024 - May 2025",
  },
  {
    title: "Merck | IT Emerging Talent Intern",
    location: "Rahway, NJ",
    description:
      "Currently working as a Data Analyst / Software Engineer Intern at Merck through the IT Emerging Talent Program.",
    icon: React.createElement(DiPython),
    date: "June 2024 - August 2024",
  },
  {
    title: "Hanlon Financial Systems Center | Research Assistant",
    location: "Hoboken, NJ",
    description:
      "I spent the semester working on a reinforcement learning environment simulating a stock market with multiple different agent types. This project resulted in a paper that is awaiting peer review. I am also working on a follow up project/ paper focusing on more agent types within a fine tuned environment.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2024 - June 2024",
  },
  {
    title: "Stevens Institute of Technology | Student",
    location: "Hoboken, NJ",
    description:
      "I graduated in May 2024 with a 3.884 GPA studying computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - May 2024",
  },
  {
    title: "Stevens Student Managed Index Fund | Software Engineer Intern",
    location: "Hoboken, NJ",
    description:
      "I enhanced internal website functionality using NextJS, implementing modularization and optimizing components for server-side rendering. Additionally, I revamped the data storage architecture by transitioning from a pickle file to a PostgreSQL database on AWS, and streamlined production updates with Docker, synchronized with GitHub releases.",
    icon: React.createElement(FaReact),
    date: "January 2024 - May 2024",
  },
  {
    title: "Stevens | Applied AI Researcher Intern",
    location: "Hoboken, NJ",
    description:
      "I did research at Stevens over the summer. I used natural language processing and topic modeling to perform a literature review on over 3600 papers. I also built a page to visualize the results of these models.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },
  {
    title: "Omnidya | Machine Learning Engineer Intern",
    location: "Los Angeles, CA | Remote",
    description:
      "I worked with a data-focused insurtech company and led various data analysis initiatives to improve the company's algorithms. During the second half of this internship, I worked on a suite of computer vision models to detect multiple driving hazards.",
    icon: React.createElement(DiPython),
    date: "December 2022 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "SideHustler",
    description:
      "This was the final group project of my web dev 2 class. We built a full stack marketplace that connects freelancers with clients. The frontend uses React.js, Tailwind, and Firebase. The backend uses Express.js and MongoDB. Additionally, we used ImageMagick, Vercel and Web Sockets.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Firebase"],
    imageUrl: sidehustlerImg,
  },
  {
    title: "Boat Detector",
    description:
      "Fun project to detect boats from a webcam pointed at the Hudson River and upload the images to a website. I used a YOLOv8 model to detect the boats, Google Cloud Storage to store the images, PostgreSQL to store the metadata, and Express to serve the site.",
    tags: ["Computer Vision", "Express.js", "PostgreSQL", "Google Cloud"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Pive",
    description:
      "My biggest project to date. Pive is a full stack marketplace that partners up with local liquor stores to deliver alcohol to customers. It allows users to search for products from nearby stores, add them to their cart, and checkout. The frontend uses React.js, Tailwind, Stripe, and Google Maps. The backend uses Django and PostgreSQL.",
    tags: ["React", "Django", "PostgreSQL", "Tailwind", "Stripe", "Google Maps"],
    imageUrl: rmtdevImg,
  },
  {
    title: "SG Headless Content Management System",
    description:
      "This was a great project to learn Flask and Jinja HTML templating. I worked with a great team of 7 to build a headless CMS. It was a great learning experience, both technically and professionally. We used Github and Trello to manage the project.",
    tags: ["Flask", "Jinja", "SQLite", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;