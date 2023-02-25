import { UserSocialLink } from './UserSocialLink'
import { FeaturedProject } from '@pages/AboutMe/components/FeaturedProjects/FeaturedProjects.types'
import { ProgrammingLanguage } from '@pages/AboutMe/components/ProgrammingLanguages/ProgrammingLanguages.types'
import { Testimonial } from '@pages/AboutMe/components/Testimonials/Testimonials.types'
import { Feature } from './Feature'
import { Package } from './Package'
import { Question } from './Question'
import { Project } from './Project'
import { IResumeInfoProps } from '@pages/Resume/components/ResumeInfo/ResumeInfo.types'
import { Blog } from './Blog'

export interface User {
  name: string
  position: string
  image: string
  phoneNumber: string
  email: string
  website: string
  country: string
  Navbar: {
    sideMenuIntroductionText: string
    socialLinks: UserSocialLink[]
  }
  AboutMe: {
    headerText: string
    featuredProjects: FeaturedProject[]
    languageIntroductionText: string
    programmingLanguages: ProgrammingLanguage[]
    testimonials: Testimonial[]
  }
  Portfolio: {
    headerText: string
    projects: Project[]
  }
  Services: {
    headerText: string
    services: Package[]
    features: Feature[]
    questions: Question[]
  }
  Resume: {
    resume: IResumeInfoProps
  }
  Footer: {
    text: string
  }
  Blog: {
    blogs: Blog[]
  }
}
