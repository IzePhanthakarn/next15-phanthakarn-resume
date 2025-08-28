import { LineMdEmail } from "@/components/icon/LineMdEmail";
import { LineMdFacebook } from "@/components/icon/LineMdFacebook";
import { LineMdGithubLoop } from "@/components/icon/LineMdGithubLoop";
import { LineMdInstagram } from "@/components/icon/LineMdInstagram";
import { LineMdMapMarkerLoop } from "@/components/icon/LineMdMapMarkerLoop";
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
    link: "tel:+66 98 340 5579",
    icon: <LineMdPhoneCallLoop className="size-4" />,
  },
  {
    name: "Address",
    link: ":Suphanburi, Thailand",
    icon: <LineMdMapMarkerLoop className="size-4" />,
  },
];

// SKILLS
export const skills = {
  frontend: [
    "ReactJS",
    "NextJS",
    "VueJS",
    "NuxtJS",
    "Shadcn",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "MUI",
  ],
  backend: [
    "ExpressJS",
    "NextJS",
    "ElysiaJS",
    "SQL",
    "Golang",
    "PostgreSQL",
    "MySQL",
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
    "Notion",
    "Window",
    "MacOS",
    "Jenkins",
  ],
  softSkill: [
    "Communication",
    "Decision Making",
    "Creativity",
    "Time Management",
    "Problem Solving",
    "Teamwork",
  ],
  interestedIn: [
    "Cryptocurrency",
    "New Innovation",
    "FPS Shooting Game",
    "Manga",
    "Novel",
    "Anime",
    "Animals"
  ]
};

export const projects: Project[] = [
  {
    title: "Portfilio Website",
    description: "descProject1",
    tech: "NuxtJS",
    link: "https://github.com/IzePhanthakarn/nuxt3-portfolio",
  },
  {
    title: "Elysia API for Portfolio",
    description: "descProject2",
    tech: "TypeScript",
    link: "https://github.com/IzePhanthakarn/elysia-portfolio",
  },
  {
    title: "Phanthakarn Resume",
    description: "descProject3",
    tech: "NextJS",
    link: "https://github.com/IzePhanthakarn/next15-phanthakarn-resume",
  },
  {
    title: "Blog Website",
    description: "descProject4",
    tech: "NextJS",
    link: "https://github.com/IzePhanthakarn/next15-innovate-space",
  },
  {
    title: "Discord Crtypto Notification",
    description: "descProject5",
    tech: "JavaScript",
    link: "https://github.com/IzePhanthakarn/discord-crypto-noti",
  },
  {
    title: "Discord ChatGPT Bot",
    description: "descProject6",
    tech: "JavaScript",
    link: "https://github.com/IzePhanthakarn/discord-chatgpt-bot",
  },
];

export const techColors = {
  NextJS: "#3178C6",
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
