import { Link } from 'react-router-dom';
import { blogs } from '../../data/constants';

function Blogs() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="Blog">
            <div className="space-y-6">
                <h2 className="text-5xl font-semibold text-center">Blogs</h2>
                <p className="text-center md:w-[700px] mx-auto text-lg">
                    I have worked on a wide range of projects covered different
                    topics of DevOps, K8s and Cloud.
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
                            className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4">
                            <div className="flex gap-8 flex-wrap justify-center items-center">
                                {blogs.map((blog) => (
                                    <Link
                                        key={blog.blogName}
                                        to={blog.blogURL}
                                        target="_blank">
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
                                                    {blog.TechnologiesUsed.map(
                                                        (Technology) => (
                                                            <div
                                                                key={Technology}
                                                                className="badge badge-primary badge-outline badge-sm">
                                                                {Technology}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <p className="text-sm flex break-all">
                                                    {blog.blogStart}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
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
                            className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4">
                            <div className="flex gap-8 flex-wrap justify-center items-center">
                                {blogs.map((blog) => {
                                    if (blog.id !== 'others')
                                        return (
                                            <Link
                                                key={blog.blogName}
                                                to={blog.blogURL}
                                                target="_blank">
                                                <div className="card w-64  bg-base-100 shadow-xl h-[389px]">
                                                    <figure>
                                                        <img
                                                            className="h-[134px] w-[255px]"
                                                            src={
                                                                blog.blogImgURL
                                                            }
                                                            alt={blog.blogName}
                                                        />
                                                    </figure>
                                                    <div className="card-body p-4 space-y-1">
                                                        <h3 className="card-title break-normal text-base">
                                                            {blog.blogName}
                                                        </h3>
                                                        <div className="card-actions justify-start">
                                                            {blog.TechnologiesUsed.map(
                                                                (
                                                                    Technology
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            Technology
                                                                        }
                                                                        className="badge badge-primary badge-outline badge-sm">
                                                                        {
                                                                            Technology
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        <p className="text-sm flex break-all">
                                                            {blog.blogStart}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                })}
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
                            className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4 ">
                            <div className="flex gap-8 flex-wrap justify-center items-center">
                                {blogs.map((blog) => {
                                    if (blog.id === 'others')
                                        return (
                                            <Link
                                                key={blog.blogName}
                                                to={blog.blogURL}
                                                target="_blank">
                                                <div className="card w-64  bg-base-100 shadow-xl h-[389px]">
                                                    <figure>
                                                        <img
                                                            className="h-[134px] w-[255px]"
                                                            src={
                                                                blog.blogImgURL
                                                            }
                                                            alt={blog.blogName}
                                                        />
                                                    </figure>
                                                    <div className="card-body p-4 space-y-1">
                                                        <h3 className="card-title break-normal text-base">
                                                            {blog.blogName}
                                                        </h3>
                                                        <div className="card-actions justify-start">
                                                            {blog.TechnologiesUsed.map(
                                                                (
                                                                    Technology
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            Technology
                                                                        }
                                                                        className="badge badge-primary badge-outline badge-sm">
                                                                        {
                                                                            Technology
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                        <p className="text-sm flex break-all">
                                                            {blog.blogStart}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
