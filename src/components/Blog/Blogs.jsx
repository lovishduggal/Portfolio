import { Link } from 'react-router-dom';
import { blogs } from '../../data/constants';

function Blogs() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold text-center">Blogs</h2>
                <p className="text-center md:w-[700px] mx-auto">
                    I have worked on a wide range of projects covered different
                    range of DevOps and Cloud topics.
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
                                    <Link key={blog.blogName} to={blog.blogURL}>
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
                            <div className="flex gap-4 flex-wrap justify-center">
                                <div className="card w-64 bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Shoes!
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                Fashion
                                            </div>
                                            <div className="badge badge-outline">
                                                Products
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            className="tab-content bg-base-100 border-base-300 rounded-box px-2 py-4">
                            <div className="flex gap-4 flex-wrap justify-center">
                                <div className="card w-64 bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Shoes!
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                Fashion
                                            </div>
                                            <div className="badge badge-outline">
                                                Products
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-64 bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            Shoes!
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                Fashion
                                            </div>
                                            <div className="badge badge-outline">
                                                Products
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
