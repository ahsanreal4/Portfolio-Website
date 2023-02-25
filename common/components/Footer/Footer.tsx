import { NextPage } from 'next/types'
import { IFooterProps } from './Footer.types'

const Footer: NextPage<IFooterProps> = ({ text }) => {
  return (
    <footer className='footer text-center py-4'>
      <small className='copyright'>
        Template Copyright ©
        <a
          href='https://themes.3rdwavemedia.com/'
          target='_blank'
          rel='noreferrer'
        >
          {text}
        </a>
      </small>
    </footer>
  )
}

export default Footer
