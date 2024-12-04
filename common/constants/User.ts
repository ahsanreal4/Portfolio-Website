import { USER_SOCIAL_LINKS } from "../components/Navbar/UserSocialLinks";
import { FEATURED_PROJECTS } from "../../pages/AboutMe/constants/FeaturedProjects";
import { PROGRAMMING_LANGUAGES } from "../../pages/AboutMe/constants/ProgrammingLanguages";
import { TESTIMONIALS } from "../../pages/AboutMe/constants/Testimonials";
import { BLOGS } from "../../pages/Blog/constants/Blogs";
import { PROJECTS } from "../../pages/Portfolio/constants/Projects";
import { RESUME_INFO_PROPS } from "../../pages/Resume/constants/ResumeInfo";
import { QUESTIONS } from "../../pages/Services/constants/FAQ";
import {
  FEATURES,
  SERVICE_PACKAGES,
} from "../../pages/Services/constants/Packages";
import { User } from "../../models/User";

export const USER: User = {
  name: "Ahsan Azeem",
  image: "https://ca.slack-edge.com/T0158R1CKT2-U040LABG4V6-dfc49951af9f-512",
  position: "Senior Full Stack Developer",
  phoneNumber: "+923324678965",
  email: "ahsan.btph123@gmail.com",
  website: "github.com/ahsanreal4",
  country: "Lahore, Pakistan",
  Navbar: {
    sideMenuIntroductionText:
      "I have been passionate about programming since I was 13.",
    socialLinks: USER_SOCIAL_LINKS,
  },
  AboutMe: {
    headerText:
      "I am a Full Stack Developer with a strong focus on Backend development, proficient in Java and Node.js. I have extensive experience in designing and building scalable, secure microservice solutions, leveraging best practices to ensure performance and reliability. My expertise includes Reactive programming in Java, enabling efficient and responsive backend systems. While my primary focus is backend, I also have foundational experience in frontend development using React and Next.js.",
    featuredProjects: FEATURED_PROJECTS,
    languageIntroductionText:
      "I have more than 5 years&apos; experience building software forclients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out moreabout my experience?",
    programmingLanguages: PROGRAMMING_LANGUAGES,
    testimonials: TESTIMONIALS,
  },
  Portfolio: {
    headerText:
      "Welcome to my online portfolio. Here you can see the list of projects that I completed as a Full Stack Developer. Want some help building your software?",
    projects: PROJECTS,
  },
  Services: {
    headerText:
      "I am taking both freelance and full time software development work. You are welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing.",
    services: SERVICE_PACKAGES,
    features: FEATURES,
    questions: QUESTIONS,
  },
  Resume: {
    resume: {
      ...RESUME_INFO_PROPS,
    },
  },
  Footer: {
    text: "3rd Wave Media",
  },
  Blog: {
    blogs: BLOGS,
  },
};
