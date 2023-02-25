import { USER } from 'common/constants/User'
import { NextPage } from 'next'
import PortfolioHeader from './components/Header/Header'
import ProjectsList from './components/ProjectsList/ProjectsList'
import { IPortfolioProps } from './index.types'

const Portfolio: NextPage<IPortfolioProps> = ({ setCurrentPage }) => {
  return (
    <>
      <PortfolioHeader
        text={USER.Portfolio.headerText}
        setCurrentPage={setCurrentPage}
      />
      <ProjectsList projects={USER.Portfolio.projects} />
    </>
  )
}

export default Portfolio
