/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { NextPage } from 'next'
import { INavbarProps, NavLink } from './Navbar.types'
import { UserSocialLink } from 'models/UserSocialLink'

const Navbar: NextPage<INavbarProps> = ({
  currentPage,
  setCurrentPage,
  name,
  image,
  introductionText,
  navLinks,
  userSocialLinks
}) => {
  const renderNavLinks = () =>
    navLinks.map((navLink: NavLink, index: number) => (
      <li
        key={index}
        className={`nav-item ${
          currentPage === navLink.linkPageNumber && 'active'
        }`}
      >
        <a
          className='nav-link'
          href='#'
          onClick={() => setCurrentPage(navLink.linkPageNumber)}
        >
          <i className={navLink.linkIconClassName} />
          {navLink.linkText}
          <span className='sr-only'>(current)</span>
        </a>
      </li>
    ))

  const renderUserLinks = () =>
    userSocialLinks.map((userLink: UserSocialLink, index: number) => (
      <li key={index} className='list-inline-item'>
        <a href={userLink.linkUrl}>
          <i className={userLink.linkIconClassName} />
        </a>
      </li>
    ))

  const handleDarkModeChange = (e: any) => {
    const element = document.getElementsByTagName('body')[0]
    if (e.target.checked) {
      element.classList.add('dark-mode')
    } else {
      element.classList.remove('dark-mode')
    }
  }

  return (
    <header className='header text-center'>
      <div className='force-overflow'>
        <h1 className='blog-name pt-lg-4 mb-0'>
          <a href='index.html'>{name}</a>
        </h1>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navigation'
            aria-controls='navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div id='navigation' className='collapse navbar-collapse flex-column'>
            <div className='profile-section pt-3 pt-lg-0'>
              <img
                className='profile-image mb-3 rounded-circle mx-auto'
                src={image}
                alt='image'
              />
              <div className='bio mb-3'>{introductionText}</div>
              {/*//bio*/}
              <ul className='social-list list-inline py-2 mx-auto'>
                {renderUserLinks()}
              </ul>
              {/*//social-list*/}
              <hr />
            </div>
            {/*//profile-section*/}
            <ul className='navbar-nav flex-column text-left'>
              {renderNavLinks()}
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='fas fa-cogs fa-fw mr-2' />
                  More Pages
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='project.html'>
                    Project Page
                  </a>
                  <a className='dropdown-item' href='blog-home.html'>
                    Blog Home 1
                  </a>
                  <a className='dropdown-item' href='blog-home-alt.html'>
                    Blog Home 2
                  </a>
                  <a className='dropdown-item' href='blog-post.html'>
                    Blog Post
                  </a>
                </div>
              </li>
            </ul>
            <div className='my-2'>
              <a
                className='btn btn-primary'
                href='#'
                onClick={() => setCurrentPage(6)}
              >
                <i className='fas fa-paper-plane mr-2' />
                Hire Me
              </a>
            </div>
            <div className='dark-mode-toggle text-center w-100'>
              <hr className='mb-4' />
              <h4 className='toggle-name mb-3 '>
                <i className='fas fa-adjust mr-1' />
                Dark Mode
              </h4>
              <input
                className='toggle'
                id='darkmode'
                type='checkbox'
                onChange={handleDarkModeChange}
              />
              <label className='toggle-btn mx-auto mb-0' htmlFor='darkmode' />
            </div>
            {/*//dark-mode-toggle*/}
          </div>
        </nav>
      </div>
      {/*//force-overflow*/}
    </header>
  )
}

export default Navbar
