const BlogHeader = () => (
  <section className='cta-section theme-bg-light py-5'>
    <div className='container text-center'>
      <h2 className='heading'>A Blog About Software Development And Life</h2>
      <div className='intro'>
        Welcome to my blog. Subscribe and get my latest blog post in your inbox.
      </div>
      <form className='signup-form form-inline justify-content-center pt-3'>
        <div className='form-group'>
          <label className='sr-only' htmlFor='semail'>
            Your email
          </label>
          <input
            type='email'
            id='semail'
            name='semail1'
            className='form-control mr-md-1 semail'
            placeholder='Enter email'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Subscribe
        </button>
      </form>
    </div>
    {/*//container*/}
  </section>
)

export default BlogHeader
