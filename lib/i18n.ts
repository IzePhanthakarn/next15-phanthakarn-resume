import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { calculateDuration } from "./date";

const resources = {
  en: {
    translation: {
      aboutMe: {
        title: "About Me",
        description1: `I started learning web development in 2022, beginning with projects using pure HTML/CSS from YouTube tutorials. Later, I explored frameworks to improve both front-end and back-end development, including building APIs with Golang. Now, with ${calculateDuration(
          "2022-01-01"
        )} of experience, I'm able to take a website from its initial structure all the way to production deployment.`,
        description2: "In the future, I plan to study more to improve my skills, such as developing APIs in Rust, Automated Testing, creating cryptocurrencies, cyber security for Penetration Testing and experimenting as a white hat hacker, and developing soft skills to become a project manager. Of course, all of these are part of my plans to do in my free time.",
      },
      profile: {
        description:
          "I’m a Full Stack developer who enjoys creating web applications that solve everyday problems and make life more convenient.",
        fullWebsite: "Full Website",
      },
      skills: "Skills",
      featuredProjects: {
        title: "Featured Projects",
        descProject1:
          "A personal portfolio website built with Nuxt.js and TailwindCSS, showcasing my projects and skills, following my best practices for clean and efficient code.",
          descProject2:
          "An API for a portfolio website built with Elysia and TypeScript, created as a learning project to practice API development.",
          descProject3:
            "A personal resume website built with Next.js, TailwindCSS, and Shadcn UI, showcasing my skills and work experience.",
          descProject4: "A website for people to write articles and read articles written by others, divided by category, with a verification system via GitHub.",
        descProject5: "A Discord bot used for price alerts of crypto coins every 9 am. You can add or delete items you want to see and check the price in real time.",
        descProject6:
          "A Discord bot that uses OpenAI's ChatGPT to generate responses, built as a project to explore bot development and AI integration.",
        viewProject: "View Project",
      },
      workExperience: {
        title: "Work Experience",
        descJob1:
          "After graduation, this is the first company I worked for. I learned new frameworks, developed my skills, knowledge and tools for web development. My skills improved greatly because I had a good team to consult with. So far, I have done 2 projects and 4 maintenance projects. I mostly develop front-end.",
        role1: "Full Stack Developer",
        duration1: `2023 - Present (${calculateDuration("2023-05-08")})`,
        descJob2:
          "I have to take the requirements from the client, design and develop the backend system using Golang language and PostgreSQL database. Sometimes I will help to develop the frontend system using NuxtJS as a framework. The project I am involved in developing is a healthcare system.",
        role2: "Back-End Developer (Internship)",
        duration2: "2022 - 2023 (6 months)",
      },
      copyright: "Copyright",
      allRightsReserved: "All Rights Reserved."
    },
  },
  th: {
    translation: {
      aboutMe: {
        title: "เกี่ยวกับผม",
        description1: `ผมเริ่มเรียนรู้การพัฒนาเว็บในปี 2022 โดยเริ่มจากการทำโปรเจกต์ด้วย HTML/CSS จากการดูคลิปสอนบน YouTube ต่อมาได้เริ่มศึกษา Framework ต่างๆ เพื่อพัฒนาทั้งด้าน Front-end และ Back-end รวมถึงการสร้าง API ด้วย Golang ตอนนี้ผมมีประสบการณ์มา ${calculateDuration(
          "2022-01-01",
          "th-TH"
        )}แล้ว และสามารถสร้างเว็บไซต์ตั้งแต่การวางโครงร่างไปจนถึงการ Deployment ให้ใช้งานได้จริง`,
        description2: "ในอนาคต ผมมีแผนที่จะศึกษาเพิ่มเติมเพื่อพัฒนาทักษะของฉัน เช่น การพัฒนา API ในภาษา Rust, การทำ Automated Testing, การสร้างสกุลเงินดิจิทัล, การรักษาความปลอดภัยทางไซเบอร์สำหรับการทดสอบการเจาะระบบ และการทดลองในฐานะ White hat hacker รวมถึงการพัฒนาทักษะทางอารมณ์เพื่อเป็นผู้จัดการโปรเจกต์ แน่นอนว่าทั้งหมดนี้เป็นส่วนหนึ่งของแผนการทำเวลาว่างของผม",
      },
      profile: {
        description:
          "ผมเป็นนักพัฒนา Full Stack ที่ชื่นชอบการสร้าง web application เพื่อมาแก้ไขปัญหาในชีวิตประจำวัน หรือช่วยให้ชีวิตสะดวกสะบายมากยิ่งขึ้น",
        fullWebsite: "ดูเว็บไซต์เต็ม",
      },
      skills: "ทักษะ",
      featuredProjects: {
        title: "โปรเจกต์ที่โดดเด่น",
        descProject1:
        "เว็บไซต์ Portfolio ส่วนตัวที่สร้างด้วย Nuxt.js และ TailwindCSS แสดงผลงานและทักษะของฉัน พร้อมเป็นแนวทางที่ดีที่สุดในการเขียนโค้ดที่สะอาดและมีประสิทธิภาพ",
        descProject2:
        "API สำหรับเว็บไซต์ Portfolio ที่สร้างด้วย Elysia และ TypeScript ซึ่งสร้างขึ้นเพื่อเรียนรู้และฝึกฝนการพัฒนา API",
        descProject3:
          "เว็บไซต์ resume ส่วนตัวที่สร้างด้วย Next.js, TailwindCSS, และ Shadcn UI เพื่อแสดงทักษะและประสบการณ์การทำงานของผม",
        descProject4: "เว็บไซต์ให้ผู้ใช้เขียนบทความและอ่านบทความที่คนอื่นเขียน แบ่งตามหมวดหมู่ มีระบบยืนยันตัวตนผ่าน GitHub",
        descProject5: "บอท Discord ใช้สำหรับแจ้งเตือนราคาเหรียญ crypto ทุก 9.00 น. สามารถเพิ่มหรือลบรายการที่คุณต้องการดูและตรวจสอบราคาแบบเรียลไทม์",
        descProject6:
          "บอท Discord ที่ใช้ OpenAI's ChatGPT เพื่อสร้างการตอบสนอง ซึ่งสร้างขึ้นเพื่อศึกษาและทดลองพัฒนา bot และการรวม AI เข้าไปในโปรเจกต์",
        viewProject: "ดูโปรเจกต์",
      },
      workExperience: {
        title: "ประวัติการทำงาน",
        descJob1:
          "หลังจากเรียนจบ ที่นี่คือบริษัทแรกที่ผมเข้าทำงาน ผมได้เรียนรู้ Framework ใหม่ๆ ผมได้พัฒนา ทักษะ ความรู้เรื่อง และเครื่องมือในการพัฒนาเว็บไซต์ต่างๆ ทักษะผมก้าวกระโดดมากๆเนื่องจากมีทีมที่ดี ค่อยให้คำปรึกษากัน ปัจจุบันผ่านมาแล้ว 2 โปรเจกต์ และ maintainance อีก 4 โปรเจกต์ ส่วนใหญ่ผมจะพัฒนาในส่วนของระบบหน้าบ้าน",
        role1: "Full Stack Developer",
        duration1: `2023 - ปัจจุบัน (${calculateDuration("2023-05-08", "th-TH")})`,
        descJob2:
          "ผมต้องรับข้อกำหนดจากลูกค้า ออกแบบและพัฒนาระบบ Back-end โดยใช้ภาษา Golang และฐานข้อมูล PostgreSQL บางครั้งฉันจะช่วยพัฒนา Front-end โดยใช้ NuxtJS เป็นเฟรมเวิร์ก โปรเจกต์ที่ผมมีส่วนร่วมในการพัฒนาคือระบบดูแลสุขภาพ",
        role2: "Back-End Developer (ฝึกงาน)",
        duration2: "2022 - 2023 (6 เดือน)",
      },
      copyright: "ลิขสิทธิ์",
      allRightsReserved: "สงวนสิทธิ์ทุกประการ"
    },
  },
};

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "en-US";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: savedLang ?? "en-US",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
