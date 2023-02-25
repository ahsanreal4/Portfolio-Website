import { Award } from 'models/Award'
import { Education } from 'models/Education'
import { Language } from 'models/Language'
import { ResumeProject } from 'models/ResumeProject'
import { WorkExperience } from 'models/WorkExperience'

export interface IResumeInfoProps {
  workExperiences: WorkExperience[]
  technicalSkills: string[]
  professionalSkills: string[]
  educations: Education[]
  awards: Award[]
  languages: Language[]
  interests: string[]
  projects: ResumeProject[]
  resumeIntroductionText: string
}
