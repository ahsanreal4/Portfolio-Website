/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import {
  FeaturedProject,
  IFeaturedProjectsProps,
  RenderFeaturedProjectType
} from './FeaturedProjects.types'

export const RenderFeaturedProject = ({
  featuredProject
}: RenderFeaturedProjectType) => (
  <div className='col-md-6 mb-5'>
    <div className='card project-card'>
      <div className='row no-gutters'>
        <div className='col-lg-4 card-img-holder'>
          <img src={featuredProject.image} className='card-img' alt='image' />
        </div>
        <div className='col-lg-8'>
          <div className='card-body'>
            <h5 className='card-title'>
              <a href='project.html' className='theme-link'>
                {featuredProject.headingText}
              </a>
            </h5>
            <p className='card-text'>{featuredProject.paragraphText}</p>
            <p className='card-text'>
              <small className='text-muted'>
                Client: {featuredProject.clientName}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className='link-mask'>
        <a className='link-mask-link' href='project.html' />
        <div className='link-mask-text'>
          <a className='btn btn-secondary' href='project.html'>
            <i className='fas fa-eye mr-2' />
            View Case Study
          </a>
        </div>
      </div>
      {/*//link-mask*/}
    </div>
    {/*//card*/}
  </div>
)

const FeaturedProjects: NextPage<IFeaturedProjectsProps> = ({
  featuredProjects,
  setCurrentPage
}) => {
  return (
    <section className='featured-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-5'>
          Featured Projects
        </h2>
        <div className='row'>
          {featuredProjects.map(
            (featuredProject: FeaturedProject, index: number) => (
              <RenderFeaturedProject
                key={index}
                featuredProject={featuredProject}
              />
            )
          )}
          {/*//col*/}
        </div>
        {/*//row*/}
        <div className='text-center py-3'>
          <a
            href='#'
            onClick={() => setCurrentPage(2)}
            className='btn btn-primary'
          >
            <i className='fas fa-arrow-alt-circle-right mr-2' />
            View Portfolio
          </a>
        </div>
      </div>
      {/*//container*/}
    </section>
  )
}

export default FeaturedProjects
