import type { NextPage } from 'next'

import { NAV_LINKS } from '@components/Navbar/NavLinks'
import { USER } from 'common/constants/User'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import useGetCurrentPage from 'hooks/useGetCurrentPage'

const Home: NextPage = () => {
  const { currentPage, setCurrentPage, getPage } = useGetCurrentPage()

  return (
    <>
      <div className='main-wrapper'>
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          name={USER.name}
          introductionText={USER.Navbar.sideMenuIntroductionText}
          image={USER.image}
          navLinks={NAV_LINKS}
          userSocialLinks={USER.Navbar.socialLinks}
        />
        {getPage(currentPage)}
        <Footer text={USER.Footer.text} />
      </div>
    </>
  )
}

export default Home
