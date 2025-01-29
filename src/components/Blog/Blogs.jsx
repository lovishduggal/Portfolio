import { Link } from 'react-router-dom';
import { blogs } from '../../data/constants';
import { useState } from 'react';

function Blogs() {
  const [visibleBlogs, setVisibleBlogs] = useState(10);

  const loadMore = () => {
    setVisibleBlogs((prevCount) => prevCount + 10);
  };

  const showLess = () => {
    setVisibleBlogs(10);
  };

  return (
    <div className="max-w-7xl mx-auto my-16 p-4" id="Blog">
      <div className="space-y-6">
        <h2 className="text-5xl font-semibold text-center">Blogs</h2>
        <p className="text-center md:w-[700px] mx-auto text-lg">
          I have worked on a wide range of projects covered different topics of
          DevOps, K8s and Cloud.
        </p>
        <div>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="All"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4"
            >
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {blogs.slice(0, visibleBlogs).map((blog, index) => (
                  <Link
                    key={blog.blogName}
                    to={blog.blogURL}
                    target="_blank"
                    className="transform transition-all duration-300 ease-in-out hover:scale-105"
                    style={{
                      animation: `fadeIn 0.2s ease-out ${index * 0.01}s`,
                      opacity: 0,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <div className="card w-64  bg-base-100 shadow-xl h-[389px]">
                      <figure>
                        <img
                          className="h-[134px] w-[255px]"
                          src={blog.blogImgURL}
                          alt={blog.blogName}
                          width={255}
                          height={134}
                        />
                      </figure>
                      <div className="card-body p-4 space-y-1">
                        <h3 className="card-title break-normal text-base">
                          {blog.blogName}
                        </h3>
                        <div className="card-actions justify-start">
                          {blog.TechnologiesUsed.map((Technology) => (
                            <div
                              key={Technology}
                              className="badge badge-primary badge-outline badge-sm"
                            >
                              {Technology}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm flex break-all">
                          {blog.blogStart}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8 space-x-4">
                {visibleBlogs > 10 && (
                  <button onClick={showLess} className="btn btn-secondary">
                    Show Less
                  </button>
                )}
                {visibleBlogs < blogs.length && (
                  <button onClick={loadMore} className="btn btn-primary">
                    Show More
                  </button>
                )}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="DevOps"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4"
            >
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {blogs
                  .filter((blog) => blog.id !== 'others')
                  .slice(0, visibleBlogs)
                  .map((blog, index) => (
                    <Link
                      key={blog.blogName}
                      to={blog.blogURL}
                      target="_blank"
                      className="transform transition-all duration-300 ease-in-out hover:scale-105"
                      style={{
                        animation: `fadeIn 0.2s ease-out ${index * 0.01}s`,
                        opacity: 0,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <div className="card w-64  bg-base-100 shadow-xl h-[389px]">
                        <figure>
                          <img
                            className="h-[134px] w-[255px]"
                            src={blog.blogImgURL}
                            alt={blog.blogName}
                          />
                        </figure>
                        <div className="card-body p-4 space-y-1">
                          <h3 className="card-title break-normal text-base">
                            {blog.blogName}
                          </h3>
                          <div className="card-actions justify-start">
                            {blog.TechnologiesUsed.map((Technology) => (
                              <div
                                key={Technology}
                                className="badge badge-primary badge-outline badge-sm"
                              >
                                {Technology}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm flex break-all">
                            {blog.blogStart}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-8 space-x-4">
                {visibleBlogs <
                  blogs.filter((blog) => blog.id !== 'others').length && (
                  <button onClick={loadMore} className="btn btn-primary">
                    Show More
                  </button>
                )}
                {visibleBlogs > 10 && (
                  <button onClick={showLess} className="btn btn-secondary">
                    Show Less
                  </button>
                )}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Others"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4"
            >
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {blogs
                  .filter((blog) => blog.id === 'others')
                  .slice(0, visibleBlogs)
                  .map((blog, index) => (
                    <Link
                      key={blog.blogName}
                      to={blog.blogURL}
                      target="_blank"
                      className="transform transition-all duration-300 ease-in-out hover:scale-105"
                      style={{
                        animation: `fadeIn 0.2s ease-out ${index * 0.01}s`,
                        opacity: 0,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <div className="card w-64  bg-base-100 shadow-xl h-[389px]">
                        <figure>
                          <img
                            className="h-[134px] w-[255px]"
                            src={blog.blogImgURL}
                            alt={blog.blogName}
                          />
                        </figure>
                        <div className="card-body p-4 space-y-1">
                          <h3 className="card-title break-normal text-base">
                            {blog.blogName}
                          </h3>
                          <div className="card-actions justify-start">
                            {blog.TechnologiesUsed.map((Technology) => (
                              <div
                                key={Technology}
                                className="badge badge-primary badge-outline badge-sm"
                              >
                                {Technology}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm flex break-all">
                            {blog.blogStart}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="text-center mt-8 space-x-4">
                {visibleBlogs <
                  blogs.filter((blog) => blog.id === 'others').length && (
                  <button onClick={loadMore} className="btn btn-primary">
                    Show More
                  </button>
                )}
                {visibleBlogs > 10 && (
                  <button onClick={showLess} className="btn btn-secondary">
                    Show Less
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Blogs;
