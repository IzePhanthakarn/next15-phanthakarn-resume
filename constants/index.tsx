import { LineMdEmail } from "@/components/icon/LineMdEmail";
import { LineMdFacebook } from "@/components/icon/LineMdFacebook";
import { LineMdGithubLoop } from "@/components/icon/LineMdGithubLoop";
import { LineMdInstagram } from "@/components/icon/LineMdInstagram";
import { LineMdPhoneCallLoop } from "@/components/icon/LineMdPhoneCallLoop";

export const mainWebsite = "https://izephanthakarn.netlify.app/";

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
    "JavaScript",
    "TypeScript",
  ],
  backend: [
    "ExpressJS",
    "SQL",
    "Golang",
    "NextJS",
    "PostgreSQL",
    "MySQL",
    "ElysiaJS",
    "Supabase",
    "Sentry",
  ],
  tools: [
    "VSCode",
    "Docker",
    "ChatGPT",
    "Swagger",
    "Postman",
    "DBeaver",
    "Git",
    "Figma",
    "Lens",
    "Notion",
    "Window",
    "MacOS",
    "Jenkins",
  ],
};

export const projects: Project[] = [
  {
    title: "Phanthakarn Resume",
    description: "descProject1",
    tech: "TypeScript",
    link: "https://github.com/IzePhanthakarn/next15-phanthakarn-resume",
  },
  {
    title: "Elysia API for Portfolio",
    description: "descProject2",
    tech: "TypeScript",
    link: "https://github.com/IzePhanthakarn/elysia-portfolio",
  },
  {
    title: "Portfilio Website",
    description: "descProject3",
    tech: "NuxtJS",
    link: "https://github.com/IzePhanthakarn/nuxt3-portfolio",
  },
  {
    title: "Discord ChatGPT Bot",
    description: "descProject4",
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
    role: "role1",
    company: "Soilfish Co., Ltd.",
    logo: "/company/Soilfish.png",
    duration: "duration1",
    description: "descJob1",
    link: "https://soilfish.co/",
  },
  {
    role: "role2",
    company: "AI Technovation Co.,Ltd.",
    logo: "/company/AITechnovation.png",
    duration: "duration2",
    description: "descJob2",
    link: "http://www.aitechnovation.com/",
    images: [],
  },
];
