/* eslint-disable @next/next/no-img-element */
import { renderBlogs } from "../../Blog/Blogs/Blogs";
import { Blog } from "../../../../models/Blog";
import { NextPage } from "next";
import { ILatestBlogsProps } from "./LatestBlogs.types";

const LatestBlogs: NextPage<ILatestBlogsProps> = ({ blogs }) => (
  <section className="latest-blog-section p-3 p-lg-5">
    <div className="container">
      <h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
      <div className="row">
        {blogs.map((blog: Blog, index: number) => renderBlogs(blog, index))}
      </div>
    </div>
    {/*//container*/}
  </section>
);

export default LatestBlogs;
