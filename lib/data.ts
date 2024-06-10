import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/avatar.png";
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
    title: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Currently studying computer science at Stevens, I will graduate in May 2024",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - May 2024",
  },
  {
    title: "Applied AI Researcher Intern",
    location: "Hoboken, NJ",
    description:
      "I did research at Stevens over the summer. I used natural language processing and topic modeling to perform a literature review on over 3600 papers. I also built a page to visualize the results of these models.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },
  {
    title: "Machine Learning Engineer Intern",
    location: "Los Angeles, CA | Remote",
    description:
      "I worked with a data-focused insurtech company and led various data analysis initiatives to improve the company's algorithms. During the second half of this internship, I worked on a suite of computer vision models to detect multiple driving hazards.",
    icon: React.createElement(FaReact),
    date: "December 2022 - August 2023",
  },
] as const;

export const projectsData = [
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