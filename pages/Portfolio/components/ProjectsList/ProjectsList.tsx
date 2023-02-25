/* eslint-disable @next/next/no-img-element */

import { RenderFeaturedProject } from '@pages/AboutMe/components/FeaturedProjects/FeaturedProjects'
import { Project } from 'models/Project'
import { NextPage } from 'next/types'
import { useState } from 'react'
import { IProjectsListProps, PROJECT_TYPES } from './ProjectsList.types'

const ProjectsList: NextPage<IProjectsListProps> = ({ projects }) => {
  const [activeType, setActiveType] = useState(PROJECT_TYPES[0])

  const renderProjectType = (projectTypeName: string, index: number) => (
    <li
      key={index}
      className={`type mb-3 mb-lg-0 ${
        projectTypeName === activeType && 'active'
      }`}
      data-filter='*'
      onClick={() => setActiveType(projectTypeName)}
    >
      {projectTypeName}
    </li>
  )

  const renderProjects = () => {
    let projectsToRender: Project[] = []
    if (activeType === 'All') {
      projectsToRender = projects
    } else {
      projectsToRender = projects.filter(
        (project: Project) => project.projectType === activeType
      )
    }

    return (
      <div className='project-cards row isotope'>
        {projectsToRender.map((project: Project, index: number) => (
          <RenderFeaturedProject
            key={index}
            featuredProject={project.featuredProject}
          />
        ))}
      </div>
    )
  }

  return (
    <section className='projects-list px-3 py-5 p-md-5'>
      <div className='container'>
        <div className='text-center'>
          <ul id='filters' className='filters mb-5 mx-auto pl-0'>
            {PROJECT_TYPES.map((type: string, index: number) =>
              renderProjectType(type, index)
            )}
          </ul>
          {/*//filters*/}
        </div>
        {renderProjects()}
        {/*//row*/}
      </div>
    </section>
  )
}

export default ProjectsList
