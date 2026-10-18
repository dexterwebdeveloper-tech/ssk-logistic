import React from "react";

const blogs = [
  {
    image: "blog-2-1.jpg",
    authorImage: "blog-one-author-img-1.jpg",
    title: "Grow Your Following by the Building Cargo Service",
    author: "Janes Cooper",
    date: "May 10, 2025",
  },
  {
    image: "blog-2-2.jpg",
    authorImage: "blog-one-author-img-2.jpg",
    title: "Cargo Follow Through the Best Supply Your Metal",
    author: "Kevin Cooper",
    date: "May 10, 2025",
  },
  {
    image: "blog-2-3.jpg",
    authorImage: "blog-one-author-img-3.jpg",
    title: "How Will You Know Success When it Show Up?",
    author: "Alisa Fox",
    date: "May 10, 2025",
  },
];


const BlogTwo = () => {
  return (
    <section className="blog-two" id="blog">

      <div className="container">

        {/* Section Title */}
        <div className="section-title text-center sec-title-animation animation-style1">

          <div className="section-title__tagline-box">

            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>

            <h6 className="section-title__tagline">
              Blog & News
            </h6>

            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>

          </div>


          <h3 className="section-title__title title-animation">
            Latest <span>News</span> from Insight
          </h3>

        </div>



        <div className="row">

          {blogs.map((blog, index) => (

            <div
              className={`col-xl-4 col-lg-6 wow ${
                index === 0
                  ? "fadeInLeft"
                  : index === 1
                  ? "fadeInUp"
                  : "fadeInRight"
              }`}
              data-wow-delay={`${(index + 1) * 200}ms`}
              key={index}
            >

              <div className="blog-two__single">


                <div className="blog-two__img">

                  <img
                    src={`/images/blog/${blog.image}`}
                    alt={blog.title}
                  />


                  <div className="blog-two__plus">

                    <a href="/blog-details">
                      <i className="icon-plus"></i>
                    </a>

                  </div>


                  <div className="blog-two__tag">

                    <a href="/blog-details">
                      Logistics
                    </a>

                  </div>

                </div>



                <div className="blog-two__content">


                  <ul className="blog-two__meta list-unstyled">

                    <li>
                      <a href="/blog-details">

                        <span className="fas fa-calendar-alt"></span>
                        {blog.date}

                      </a>
                    </li>


                    <li>
                      <a href="/blog-details">

                        <span className="fas fa-comments"></span>
                        Comment

                      </a>
                    </li>

                  </ul>



                  <h3 className="blog-two__title">

                    <a href="/blog-details">
                      {blog.title}
                    </a>

                  </h3>




                  <div className="blog-two__author-and-btn">


                    <div className="blog-two__author-info">


                      <div className="blog-two__author-img-box">

                        <div className="blog-two__author-img">

                          <img
                            src={`/images/blog/${blog.authorImage}`}
                            alt={blog.author}
                          />

                        </div>

                      </div>



                      <div className="blog-two__author-content">

                        <h5>
                          {blog.author}
                        </h5>

                        <p>
                          {blog.date}
                        </p>

                      </div>


                    </div>



                    <div className="blog-two__arrow-box">

                      <a
                        href="/blog-details"
                        className="blog-two__arrow"
                      >

                        <span className="icon-right-arrow"></span>

                      </a>

                    </div>


                  </div>


                </div>


              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default BlogTwo;