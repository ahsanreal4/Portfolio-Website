import { NextPage } from 'next'
import {
  IProgrammingLanguages,
  ProgrammingLanguage,
  RenderProgrammingLanguageProps
} from './ProgrammingLanguages.types'

const ProgrammingLanguages: NextPage<IProgrammingLanguages> = ({
  programmingLanguages,
  introductionText
}) => {
  const RenderProgrammingLanguage = ({
    programmingLanguage
  }: RenderProgrammingLanguageProps) => {
    return (
      <>
        <div className='item col-6 col-lg-3'>
          <div className='item-inner text-center'>
            <div className='item-icon'>
              {programmingLanguage.iconClassNames.map(
                (icon: string, index: number) => (
                  <i key={index} className={icon} />
                )
              )}
            </div>
            <h3 className='item-title'>{programmingLanguage.name}</h3>
            <div className='item-desc' />
          </div>
          {/*//item-inner*/}
        </div>
      </>
    )
  }

  return (
    <section className='overview-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-3'>What I do</h2>
        <div className='section-intro mb-5'>
          {introductionText} Check out my{' '}
          <a href='resume.html'>online resume</a> and
          <a href='portfolio.html'>project portfolio</a>.
        </div>
        <div className='row'>
          {programmingLanguages.map(
            (programmingLanguage: ProgrammingLanguage, index: number) => (
              <RenderProgrammingLanguage
                programmingLanguage={programmingLanguage}
                key={index}
              />
            )
          )}
          {/*//item*/}
        </div>
        {/*//row*/}
      </div>
      {/*//container*/}
    </section>
  )
}

export default ProgrammingLanguages
