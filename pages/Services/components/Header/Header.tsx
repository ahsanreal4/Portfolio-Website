import { NextPage } from 'next'
import { IServicesHeaderProps } from './Header.types'

const ServiceHeader: NextPage<IServicesHeaderProps> = ({
  headerText,
  setCurrentPage
}) => {
  return (
    <section className='cta-section theme-bg-light py-5'>
      <div className='container text-center single-col-max-width'>
        <h2 className='heading'>Services &amp; Pricing</h2>
        <div className='intro'>
          <p>
            I have 10+ years of development experience building software for the
            web and mobile devices. You can take a look at my{' '}
            <a href='#' onClick={() => setCurrentPage(2)}>
              project portfolio
            </a>{' '}
            and{' '}
            <a href='#' onClick={() => setCurrentPage(4)}>
              online resume
            </a>{' '}
            to find out more about my skills and experiences.
          </p>
          <p className='mb-0'>{headerText}</p>
        </div>
      </div>
      {/*//container*/}
    </section>
  )
}

export default ServiceHeader
