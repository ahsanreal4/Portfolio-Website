import React from 'react'

export interface FeaturedProject {
  headingText: string
  paragraphText: string
  clientName: string
  image: string
}

export interface IFeaturedProjectsProps {
  featuredProjects: FeaturedProject[]
  setCurrentPage: React.Dispatch<number>
}

export type RenderFeaturedProjectType = {
  featuredProject: FeaturedProject
}
