/* eslint-disable @next/next/no-img-element */
import { Blog } from "../../../../models/Blog";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IBlogsProps } from "./Blogs.types";

const SHOW_BLOGS_PER_PAGE = 6;

export const renderBlogs = (blog: Blog, index: number) => (
  <div key={index} className="col-md-4 mb-3">
    <div className="card blog-post-card">
      <img className="card-img-top" src={blog.imageSrc} alt="image" />
      <div className="card-body">
        <h5 className="card-title">
          <a className="theme-link" href={blog.link}>
            {blog.title}
          </a>
        </h5>
        <p className="card-text">{blog.description}</p>
        <p className="mb-0">
          <a className="more-link" href={blog.link}>
            Read more →
          </a>
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">{blog.publishingDate}</small>
      </div>
    </div>
    {/*//card*/}
  </div>
);

const Blogs: NextPage<IBlogsProps> = ({ blogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [currentBlogsPage, setCurrentBlogsPage] = useState(1);

  useEffect(() => {
    const filterdBlogsTemp: Blog[] = [];
    const limit = SHOW_BLOGS_PER_PAGE * currentBlogsPage;
    const start = SHOW_BLOGS_PER_PAGE * (currentBlogsPage - 1);
    for (let i = start; i < blogs.length; i++) {
      if (i + 1 > limit) {
        break;
      }
      const blog: Blog = blogs[i];
      filterdBlogsTemp.push(blog);
    }
    setFilteredBlogs(filterdBlogsTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBlogsPage]);

  return (
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        <div className="row">
          {filteredBlogs.map((blog: Blog, index: number) =>
            renderBlogs(blog, index)
          )}
          {/*//col*/}
        </div>
        {/*//row*/}
        <nav className="blog-nav nav nav-justified my-5">
          {currentBlogsPage > 1 && (
            <a
              className="nav-link-next nav-item nav-link rounded mr-5"
              href="#"
              onClick={() => {
                setCurrentBlogsPage((prevPage) => prevPage - 1);
              }}
            >
              Previous
              <i className="arrow-prev fas fa-long-arrow-alt-left" />
            </a>
          )}
          {SHOW_BLOGS_PER_PAGE * (currentBlogsPage + 1) <= blogs.length && (
            <a
              className="nav-link-next nav-item nav-link rounded"
              href="#"
              onClick={() => {
                if (
                  SHOW_BLOGS_PER_PAGE * (currentBlogsPage + 1) <=
                  blogs.length
                ) {
                  setCurrentBlogsPage((prevPage) => prevPage + 1);
                }
              }}
            >
              Next
              <i className="arrow-next fas fa-long-arrow-alt-right" />
            </a>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Blogs;
