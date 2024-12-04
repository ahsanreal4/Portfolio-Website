import { NextPage } from 'next'
import { GetInTouchProps } from './GetInTouch.types'

const GetInTouch: NextPage<GetInTouchProps> = ({ setCurrentPage }) => (
  <section className='contact-section px-3 py-5 p-md-5'>
    <div className='container'>
      <form
        id='contact-form'
        className='contact-form col-lg-8 mx-lg-auto'
        method='post'
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className='text-center mb-3'>Get In Touch</h3>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label className='sr-only' htmlFor='cname'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='cname'
              name='name'
              placeholder='Name'
              minLength={2}
              required
              aria-required='true'
            />
          </div>
          <div className='form-group col-md-6'>
            <label className='sr-only' htmlFor='cemail'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='cemail'
              name='email'
              placeholder='Email'
              required
              aria-required='true'
            />
          </div>
          <div className='form-group col-12'>
            <select id='services' className='custom-select' name='services'>
              <option selected>
                Select a service package you&apos;re interested in...
              </option>
              <option value='basic'>Basic</option>
              <option value='standard'>Standard</option>
              <option value='premium'>Premium</option>
              <option value='not sure'>Not sure</option>
            </select>
            <small className='form-text text-muted pt-1'>
              <i className='fas fa-info-circle mr-2 text-primary' />
              Want to know what&apos;s included in each package? Check the{' '}
              <a href='#' onClick={() => setCurrentPage(3)}>
                Services &amp; Pricing
              </a>{' '}
              page.
            </small>
          </div>
          <div className='form-group col-12'>
            <label className='sr-only' htmlFor='cmessage'>
              Your message
            </label>
            <textarea
              className='form-control'
              id='cmessage'
              name='message'
              placeholder='Enter your message'
              rows={10}
              required
              aria-required='true'
              defaultValue={''}
            />
          </div>
          <div className='form-group col-12'>
            <button type='submit' className='btn btn-block btn-primary py-2'>
              Send Now
            </button>
          </div>
        </div>
        {/*//form-row*/}
      </form>
    </div>
    {/*//container*/}
  </section>
)

export default GetInTouch
