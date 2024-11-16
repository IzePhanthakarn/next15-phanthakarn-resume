import { LineMdEmail } from "@/components/icon/LineMdEmail";
import { LineMdFacebook } from "@/components/icon/LineMdFacebook";
import { LineMdGithubLoop } from "@/components/icon/LineMdGithubLoop";
import { LineMdInstagram } from "@/components/icon/LineMdInstagram";
import { LineMdPhoneCallLoop } from "@/components/icon/LineMdPhoneCallLoop";
import { calculateDuration } from "@/lib/date";

export const mainWebsite = "https://izephanthakarn.netlify.app/"

// SOCAIL MEDIA
export const socials: Social[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/ize.phanthakarn.5",
    icon: <LineMdFacebook className="size-4" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/izeimize",
    icon: <LineMdInstagram className="size-4" />,
  },
  {
    name: "Github",
    link: "https://github.com/IzePhanthakarn",
    icon: <LineMdGithubLoop className="size-4" />,
  },
  {
    name: "Email",
    link: "mailto:izephanthakarn@hotmail.com",
    icon: <LineMdEmail className="size-4" />,
  },
  {
    name: "Phone",
    link: "tel:0983405579",
    icon: <LineMdPhoneCallLoop className="size-4" />,
  },
];

// SKILLS
export const skills = {
  frontend: [
    "ReactJS",
    "NextJS",
    "MUI",
    "VueJS",
    "NuxtJS",
    "Shadcn",
    "TailwindCSS",
  ],
  backend: ["ExpressJS", "SQL", "Golang", "PostgreSQL", "MySQL"],
  tools: [
    "VSCode",
    "Docker",
    "ChatGPT",
    "Swagger",
    "Postman",
    "DBeaver",
    "Git",
    "Figma",
  ],
};

export const projects: Project[] = [
  {
    title: "Phanthakarn Resume",
    description: "A Resume website built with NextJS TailwindCSS and Shadcn UI",
    tech: "TypeScript",
    link: "https://github.com/IzePhanthakarn/next15-phanthakarn-resume",
  },
  {
    title: "Elysia Portfolio",
    description:
      "An API for a portfolio website built with Elysia by TypeScript",
    tech: "TypeScript",
    link: "https://github.com/IzePhanthakarn/elysia-portfolio",
  },
  {
    title: "Portfilio Website",
    description:
      "A personal portfolio website built with Nuxt.js and Tailwind CSS",
    tech: "NuxtJS",
    link: "https://github.com/IzePhanthakarn/nuxt3-portfolio",
  },
  {
    title: "Discord ChatGPT Bot",
    description:
      "A Discord bot that uses OpenAI's ChatGPT to generate responses",
    tech: "JavaScript",
    link: "https://github.com/IzePhanthakarn/discord-chatgpt-bot",
  },
];

export const techColors = {
  TypeScript: "#3178C6",
  NuxtJS: "#41b883",
  JavaScript: "#F1E05A",
};

export const jobs = [
  {
    role: "Full-Stack Developer",
    company: "Soilfish Co., Ltd.",
    logo: "/company/Soilfish.png",
    duration: `2023 - Present (${calculateDuration("2023-05-08")})`,
    description:
      "Developed and maintained various client projects, focusing on responsive design and performance optimization.",
    link: "https://websolutions.com",
  },
  {
    role: "Back-End Developer (Internship)",
    company: "AI Technovation CO.,LTD.",
    logo: "/company/AITechnovation.png",
    duration: "2022 - 2023 (6 months)",
    description:
      "Receive requirements from customers, design and develop back-end systems using Golang language and PostgreSQL database. Sometimes I will help develop front-end systems using NuxtJS as a framework. The project received is related to the development of a healthcard system.",
    link: "http://www.aitechnovation.com/",
    images: [],
  },
];
