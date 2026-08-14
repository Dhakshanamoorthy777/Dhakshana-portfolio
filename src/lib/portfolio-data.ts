import {
  SiSpringboot, SiHibernate, SiMysql, SiHtml5, SiCss,
  SiJavascript, SiReact, SiBootstrap, SiGit, SiGithub, SiPostman,
  SiArduino, SiAngular,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export const PERSONAL = {
  name: "Dhakshana Moorthy B",
  role: "Java Full Stack Developer",
  location: "Chennai, India",
  email: "dhakshanamoorthy555@gmail.com",
  tagline: "I build performant Java backends and beautiful React frontends.",
  bio: "I am a Computer Science Engineering graduate and Java Full Stack Developer passionate about building scalable backend applications and modern web experiences. I enjoy developing REST APIs using Spring Boot, designing responsive React applications, and continuously improving my problem-solving skills. I am currently seeking an opportunity as a Software Engineer where I can contribute, learn, and grow.",
  resumeUrl: "/resume.pdf",
};

/** Set these when provided — links render only when non-empty */
export const SOCIAL = {
  github: "https://github.com/Dhakshanamoorthy777",
  linkedin: "https://www.linkedin.com/in/b-dhakshana-moorthy-96873424/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5+", label: "Projects" },
  { value: "7.5", label: "CGPA" },
  { value: "Java", label: "Full Stack" },
  { value: "Fresher", label: "Open to Work" },
];

export const TIMELINE = [
  {
    year: "2025",
    title: "Bachelor of Engineering (Computer Science Engineering)",
    org: "Anna University, Chennai — Graduated 2025",
    desc: "Completed engineering with a 7.5 CGPA, specializing in full-stack development and software architecture.",
  },
  {
    year: "2025",
    title: "Java Full Stack Specialization",
    org: "QSpiders - Chennai",
    desc: "Built production-grade applications with Spring Boot, Hibernate, REST APIs, MySQL, and React.",
  },
  {
    year: "2021",
    title: "Higher Secondary — Computer Science",
    org: "Virutcham International School, Thiruvannamalai",
    desc: "Discovered programming through Java and C, won inter-school coding competitions.",
  },
];

export const ACHIEVEMENTS = [
  "Built 5+ end-to-end full-stack applications",
  "300+ DSA problems solved across LeetCode & SkillRack",
  "Active GitHub contributor with consistent commit streaks",
  "Strong CGPA of 7.5 with computer science focus",
];

export const SPORTS_ACHIEVEMENTS = [
  {
    title: "2nd Prize — Anna University Zonal Basketball Match",
    rank: "2nd",
    icon: "trophy" as const,
  },
  {
    title: "3rd Prize — CM Trophy District Level Basketball Match",
    rank: "3rd",
    icon: "medal" as const,
  },
];

export type Skill = { name: string; level: number; icon: IconType };
export type SkillCategory = { name: string; skills: Skill[] };

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Java", level: 90, icon: FaJava },
      { name: "Spring Boot", level: 85, icon: SiSpringboot },
      { name: "Hibernate / JPA", level: 80, icon: SiHibernate },
      { name: "REST APIs", level: 88, icon: FaCode },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 82, icon: SiReact },
      { name: "JavaScript", level: 85, icon: SiJavascript },
      { name: "HTML5", level: 92, icon: SiHtml5 },
      { name: "CSS3", level: 88, icon: SiCss },
      { name: "Bootstrap", level: 80, icon: SiBootstrap },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", level: 85, icon: SiMysql },
      { name: "Oracle SQL", level: 75, icon: GoDatabase },
      { name: "JPA", level: 78, icon: FaDatabase },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 85, icon: SiGit },
      { name: "GitHub", level: 88, icon: SiGithub },
      { name: "Postman", level: 82, icon: SiPostman },
      { name: "VS Code", level: 92, icon: VscVscode },
    ],
  },
];

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  gradient: string;
  github: string | null;
  live: string | null;
  icon: string;
};

export const PROJECTS: Project[] = [
  {
    title: "AI Email Reply Generator",
    desc: "Developed an AI-powered Gmail Chrome Extension that generates professional email replies using the Gemini API.",
    stack: ["Java", "Spring Boot", "Spring AI", "React.js", "Vite", "Axios", "Gemini API", "WebClient", "Chrome Extension"],
    gradient: "from-cyan-500/40 via-blue-500/30 to-violet-500/40",
    github: "https://github.com/Dhakshanamoorthy777/AI-email-reply-project",
    live: null,
    icon: "✉️",
  },
  {
    title: "Udemy Clone Backend Application",
    desc: "Developed a scalable backend for an online learning platform with REST APIs for users, courses, enrollments, authentication, search, and pagination.",
    stack: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "JWT", "REST API", "Postman"],
    gradient: "from-violet-500/40 via-fuchsia-500/30 to-pink-500/30",
    github: "https://github.com/Dhakshanamoorthy777/Udemy-Backend-Application",
    live: null,
    icon: "🎓",
  },
  {
    title: "Employee Management Application",
    desc: "Built an employee management backend with registration, login, CRUD operations, prefix search, pagination, and DTO mapping.",
    stack: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "REST API", "ModelMapper"],
    gradient: "from-amber-500/30 via-rose-500/30 to-cyan-500/30",
    github: "https://github.com/Dhakshanamoorthy777/employee-management-app",
    live: null,
    icon: "👥",
  },
  {
    title: "IoT-enabled Human Presence Detection",
    desc: "Designed a smart monitoring system with real-time human detection and alert notifications using embedded hardware modules.",
    stack: ["Embedded C", "IoT", "PIR Sensor", "GSM Module", "ATmega16"],
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
    github: null,
    live: null,
    icon: "📡",
  },
  {
    title: "Expense Tracker",
    desc: "Developed a web application to manage daily expenses, track balance, and update records dynamically.",
    stack: ["HTML", "CSS", "JavaScript"],
    gradient: "from-cyan-500/30 via-indigo-500/30 to-violet-500/30",
    github: "https://github.com/Dhakshanamoorthy777/Expense-Tracker",
    live: null,
    icon: "💸",
  },
];

export { SiAngular, SiArduino };
