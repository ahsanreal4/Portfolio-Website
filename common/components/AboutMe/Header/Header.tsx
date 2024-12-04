import { NextPage } from 'next/types'
import { IAboutMeHeaderPros } from './Header.types'

const Header: NextPage<IAboutMeHeaderPros> = ({
  name,
  introductionText,
  position,
  setCurrentPage
}) => {
  return (
    <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
      <div className='container'>
        <div className='profile-teaser media flex-column flex-lg-row'>
          <div className='media-body'>
            <h2 className='name font-weight-bold mb-1'>{name}</h2>
            <div className='tagline mb-3'>{position}</div>
            <div className='bio mb-4'>{introductionText}</div>
            {/*//bio*/}
            <div className='mb-4'>
              <a
                className='btn btn-primary mr-2 mb-3'
                href='#'
                onClick={() => setCurrentPage(2)}
              >
                <i className='fas fa-arrow-alt-circle-right mr-2' />
                <span className='d-none d-md-inline'>View</span> Portfolio
              </a>
              <a
                className='btn btn-secondary mb-3'
                href='#'
                onClick={() => setCurrentPage(4)}
              >
                <i className='fas fa-file-alt mr-2' />
                <span className='d-none d-md-inline'>View</span> Resume
              </a>
            </div>
          </div>
          {/*//media-body*/}
          {/* <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src="https://itwebservices.it/firma/avatar.png" alt=""> */}
        </div>
      </div>
    </section>
  )
}

export default Header
