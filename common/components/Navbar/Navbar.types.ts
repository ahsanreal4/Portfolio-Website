import { UserSocialLink } from 'models/UserSocialLink'

export interface NavLink {
  linkPageNumber: number
  linkText: string
  linkIconClassName: string
}

export interface INavbarProps {
  currentPage: number
  setCurrentPage: any
  image: string
  name: string
  introductionText: string
  navLinks: NavLink[]
  userSocialLinks: UserSocialLink[]
}
