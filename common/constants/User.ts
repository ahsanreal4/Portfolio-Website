import { USER_SOCIAL_LINKS } from '@components/Navbar/UserSocialLinks'
import { FEATURED_PROJECTS } from '@pages/AboutMe/constants/FeaturedProjects'
import { PROGRAMMING_LANGUAGES } from '@pages/AboutMe/constants/ProgrammingLanguages'
import { TESTIMONIALS } from '@pages/AboutMe/constants/Testimonials'
import { BLOGS } from '@pages/Blog/constants/Blogs'
import { PROJECTS } from '@pages/Portfolio/constants/Projects'
import { RESUME_INFO_PROPS } from '@pages/Resume/constants/ResumeInfo'
import { QUESTIONS } from '@pages/Services/constants/FAQ'
import { FEATURES, SERVICE_PACKAGES } from '@pages/Services/constants/Packages'
import { User } from 'models/User'

export const USER: User = {
  name: 'Ahsan Azeem',
  image: 'https://ca.slack-edge.com/T0158R1CKT2-U040LABG4V6-dfc49951af9f-512',
  position: 'Full Stack Developer',
  phoneNumber: '0123 4567 890',
  email: 'hunterfoley.business@gmail.com',
  website: 'www.yourwebsite.com',
  country: 'New York',
  Navbar: {
    sideMenuIntroductionText:
      'I have been passionate about programming since I was 13.',
    socialLinks: USER_SOCIAL_LINKS
  },
  AboutMe: {
    headerText:
      'I have been passionate about programming since I was 13 and I loveto learn. I believe in the learn by doing approach because I have always learned from mistakes. I love my job so much that I do not seem to be working. Sometimes I take decisions, sometimes I change my mind, but everytime I get to the best solution.',
    featuredProjects: FEATURED_PROJECTS,
    languageIntroductionText:
      'I have more than 10 years&apos; experience building software forclients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out moreabout my experience?',
    programmingLanguages: PROGRAMMING_LANGUAGES,
    testimonials: TESTIMONIALS
  },
  Portfolio: {
    headerText:
      'Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I am taking on freelance work at the moment. Want some help building your software?',
    projects: PROJECTS
  },
  Services: {
    headerText:
      'I am currently taking on freelance software development work. You are welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing.',
    services: SERVICE_PACKAGES,
    features: FEATURES,
    questions: QUESTIONS
  },
  Resume: {
    resume: {
      ...RESUME_INFO_PROPS
    }
  },
  Footer: {
    text: '3rd Wave Media'
  },
  Blog: {
    blogs: BLOGS
  }
}
