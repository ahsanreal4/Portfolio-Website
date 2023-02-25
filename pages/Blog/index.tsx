import { USER } from 'common/constants/User'
import Blogs from './components/Blogs/Blogs'
import BlogHeader from './components/Header/Header'

const Blog = () => (
  <>
    <BlogHeader />
    <Blogs blogs={USER.Blog.blogs} />
  </>
)

export default Blog
