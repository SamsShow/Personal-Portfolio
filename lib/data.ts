import React from "react";
import { FaReact } from "react-icons/fa";
import imgsearch from "@/public/ImageSearch_.png";
import qrcode from "@/public/Cleancode_.png";
import hoverboard from "@/public/hoverboard.png";
import corpcommentImg from "@/public/corpcomment.png";
import stellar from "@/public/Stellarvue.png";

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
    title: "UI Designer",
    location: "IKnowSpots, In",
    description:
      "As an intern UI designer, I have worked on a diverse range of projects involving both Web3 and Web2 UI designs",
    icon: React.createElement(FaReact),
    date: "Feb 2024",
  },
  {
    title: "Open Source Coordinator",
    location: "GeeksforGeeks ABESEC, In",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Oct 2023 - Jan 2024",
  },
  {
    title: "Graphics & Development Coordinator",
    location: "CodeChef ABESEC, In",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Oct 2023 - July 2024",
  },
  {
    title: "Frontend Web Developer",
    location: "Elixir Tech Community, In",
    description:
      "Designed the Front End of the Event page using HTML, CSS &JS.",
    icon: React.createElement(FaReact),
    date: "May 2023",
  },
  {
    title: "Graphic Coordinator",
    location: "GeeksforGeeks ABESEC, In",
    description:
      "Worked as a Graphics Coordinator in G.",
    icon: React.createElement(FaReact),
    date: "Jan 2023-Oct 2023",
  },
  {
    title: "National Tech Team",
    location: "Studomatrix, In",
    description:
      "An All India School Students Organization with over 75000 members from 150+ Cities ● I was a part of the National Tech Team ● Mentored students on Graphic Designing and Video Editing.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - July 2023",
  },
  {
    title: "Tech Team Lead",
    location: "K. L. International School,In",
    description:
      "Worked in many functions organised by my school, Managing them from backstage. Won a couple of interschool competitions. Worked as a Team Lead.",
    icon: React.createElement(FaReact),
    date: "Jan 2018 - Jun 2022",
  },
] as const;

export const projectsData = [
  {
    title: "FundMe",
    description:
      "A Blockchain-based project for managing funds with flexibility to securely lock and withdraw cryptocurrency.",
    tags: [ "Solidity", "Hardhat", "EtherJs", "Javascript", "Tailwind"],
    imageUrl: "https://media.licdn.com/dms/image/D5622AQEuqLZ3hnCcqQ/feedshare-shrink_1280/0/1714090591482?e=1724889600&v=beta&t=DcZi8yFqK8D2401O6sq7zKcy6v9fgSTy2Nm_PKYjoUc",
    githubUrl: "https://github.com/SamsShow/FundMe-Frontend",
    ProjectUrl: "https://fund-me-frontend-plum.vercel.app/"
  },
  
  {
    title: "Stellr Vue",
    description:
      "Coming Soon...",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: stellar,
    githubUrl: "https://github.com/SamsShow/Stellar-Vue",
    ProjectUrl: ""
  },
  {
    title: "Image Search",
    description:
      "A public web app for searching images. It uses the Unsplash API and has infinite scrolling.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: imgsearch,
    githubUrl: "https://github.com/SamsShow/ImageSearch",
    ProjectUrl: "https://image-search-samsshows-projects.vercel.app/"
  },
  {
    title: "QR Code Generator",
    description:
      "A public web app for generating QR Code using API",
    tags: ["HTML", "Tailwind", "JavaScript"],
    imageUrl: qrcode,
    githubUrl: "https://github.com/SamsShow/Cleancode",
    ProjectUrl: "https://cleancode-three.vercel.app/"
  },
  {
    title: "Hoverboard",
    description:
      "Pretty hoverboard with a nice animation.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    imageUrl: hoverboard,
    githubUrl: "https://github.com/SamsShow/hoverboard",
    ProjectUrl: "https://hoverboard-six-gamma.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstarp",
  "JavaScript",
  "React",
  "Solidity",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Framer Motion",
  "Material Ui",
  "Daisy UI",
  "Next UI",
  "Shadcn UI",
  "Python",
  "C++",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premier Pro",
  "Adobe After Effects",
  "Figma",
  "Kdenlive",
  "Canva",
] as const;
