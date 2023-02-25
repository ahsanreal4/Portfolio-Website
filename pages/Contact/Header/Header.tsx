import { USER } from 'common/constants/User'
import { UserSocialLink } from 'models/UserSocialLink'

const ContactHeader = () => {
  const renderSocialLink = (socialLink: UserSocialLink, index: number) => (
    <li key={index} className='list-inline-item mb-3'>
      <a className='twitter' href={socialLink.linkUrl}>
        <i
          style={{ width: 20, height: 20 }}
          className={`${socialLink.linkIconClassName} mr-2`}
        />
      </a>
    </li>
  )

  return (
    <section className='cta-section theme-bg-light py-5'>
      <div className='container text-center single-col-max-width'>
        <h2 className='heading'>Contact</h2>
        <div className='intro'>
          <p>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to{' '}
            <a href={`mailto:${USER.email}`}>{USER.email}</a>
          </p>
          <p>Want to get connected? Follow me on the social channels below.</p>
          <ul className='list-inline mb-0'>
            {USER.Navbar.socialLinks.map(
              (socialLink: UserSocialLink, index: number) =>
                renderSocialLink(socialLink, index)
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader
