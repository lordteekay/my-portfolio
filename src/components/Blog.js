import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog" id="Blog">
      <div className="blog__header">
        <h1>Latest News</h1>
        <p>This is my blog post</p>
        <div className="blog__contents">
          <div className="blog__post" >
            <img src="/img/blog-01.jpg" alt="" />
            <div className="blog__post__heading">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button>Read More</button>
            </div>
          </div>
          <div className="blog__post">
            <img src="/img/blog-02.jpg" alt="" />
            <div className="blog__post__heading">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button>Read More</button>
            </div>
          </div>
          <div className="blog__post">
            <img src="/img/blog-03.jpg" alt="" />
            <div className="blog__post__heading">
              <p>Development</p>
              <h3>Getting tickets to the big show</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
