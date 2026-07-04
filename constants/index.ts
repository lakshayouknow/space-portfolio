import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/lakshayouknow",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/lakshay-swami",
  },
  {
    name: "Email",
    icon: RxTwitterLogo,
    link: "mailto:swamilakshay464@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kotlin",
    image: "kotlin.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NumPy",
    image: "numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Power BI",
    image: "powerbi.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "n8n",
    image: "n8n.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "OpenAI API",
    image: "openai.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Excel",
    image: "excel.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "VS Code",
    image: "vscode.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Android Studio",
    image: "androidstudio.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "ProfitIQ — AI Dashboard",
    description:
      'An AI-powered business analytics dashboard that transforms raw Excel and CSV files into meaningful business insights. Features AI insights, data cleaning, dashboard generation, KPI cards, charts, correlation analysis, and an AI chat assistant built with Python, Pandas, NumPy, Machine Learning, and Data Visualization.',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Voice-Based AI Agent",
    description:
      'Developed an AI-powered voice assistant integrated with n8n automation workflows. Features speech recognition, AI responses, workflow automation, and API integration. This project showcases expertise in AI agent development and business process automation.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "AI Chatbot Automation",
    description:
      'Designed a chatbot capable of automating business workflows using OpenAI APIs and n8n. Features AI conversation, automation, email integration, webhooks, and API calls to streamline complex business processes.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/lakshayouknow",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/lakshay-swami",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com",
      },
    ],
  },
  {
    title: "Services",
    data: [
      {
        name: "AI Automation",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Data Analytics",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Dashboard Development",
        icon: null,
        link: "#about-me",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:swamilakshay464@gmail.com",
      },
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "View Projects",
        icon: null,
        link: "#projects",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
