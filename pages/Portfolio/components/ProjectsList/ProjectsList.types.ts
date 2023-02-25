import { Project } from 'models/Project'

export interface IProjectsListProps {
  projects: Project[]
}

export const PROJECT_TYPES = [
  'All',
  'We App',
  'Mobile App',
  'Frontend',
  'Backend'
]
