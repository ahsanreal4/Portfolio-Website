import { USER } from "../../common/constants/User";
import Blogs from "../../common/components/Blog/Blogs/Blogs";
import BlogHeader from "../../common/components/Blog/Header/Header";

const Blog = () => (
  <>
    <BlogHeader />
    <Blogs blogs={USER.Blog.blogs} />
  </>
);

export default Blog;
