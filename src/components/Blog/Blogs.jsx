function Blogs() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Blogs</h2>
                <p>
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
                            <div className="flex gap-4 flex-wrap justify-center">
                                <div className="card w-64 bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1648569856438/XCHCN3-oT.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body px-4">
                                        <h2 className="card-title">
                                            kubescape
                                            <div className="badge badge-secondary">
                                                Recently
                                            </div>
                                        </h2>

                                        <div className="card-actions justify-start">
                                            <div className="badge badge-outline">
                                                Docker Engine
                                            </div>
                                            <div className="badge badge-outline">
                                                minikube
                                            </div>
                                        </div>
                                        <p>
                                            If a dog chews shoes whose shoes
                                            does he choose?
                                        </p>
                                    </div>
                                </div>
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
