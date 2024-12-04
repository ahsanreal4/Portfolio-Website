import { NextPage } from 'next'
import { IPortfolioHeaderProps } from './Header.types'

const PortfolioHeader: NextPage<IPortfolioHeaderProps> = ({
  text,
  setCurrentPage
}) => {
  return (
    <section className='cta-section theme-bg-light py-5'>
      <div className='container text-center single-col-max-width'>
        <h2 className='heading'>Portfolio</h2>
        <div className='intro'>
          <p>{text}</p>
        </div>
        <a
          className='btn btn-primary'
          href='#'
          onClick={() => setCurrentPage(6)}
        >
          <i className='fas fa-paper-plane mr-2' />
          Hire Me
        </a>
      </div>
      {/*//container*/}
    </section>
  )
}

export default PortfolioHeader
