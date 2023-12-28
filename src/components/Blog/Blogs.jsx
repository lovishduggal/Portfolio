function Blogs() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Blogs</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ab neque explicabo ipsa? Quidem, a. Totam recusandae
                    aspernatur tempore delectus?
                </p>
                <div className="flex items-center justify-center relative">
                    <ul className=" grid  grid-cols-3 gap-x-5 px-8">
                        <li className="">
                            <input
                                className="peer sr-only"
                                type="radio"
                                defaultValue="all"
                                name="answer"
                                id="all"
                                defaultChecked=""
                            />
                            <label
                                className="flex justify-center cursor-pointer  border-b-2 py-1 px-2 text-base focus:outline-none peer-checked:border-transparent peer-checked:border-b-indigo-500 transition-all duration-500 ease-in-out"
                                htmlFor="all">
                                All
                            </label>
                            <div className="absolute  left-0 p-6 mt-2  rounded-lg w-full transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 z-20">
                                Content-1
                            </div>
                        </li>
                        <li className="">
                            <input
                                className="peer sr-only"
                                type="radio"
                                defaultValue="devops"
                                name="answer"
                                id="devops"
                            />
                            <label
                                className="flex justify-center cursor-pointer  border-b-2 py-1 px-2 text-base  focus:outline-none peer-checked:border-transparent peer-checked:border-b-indigo-500 transition-all duration-500 ease-in-out"
                                htmlFor="devops">
                                DevOps
                            </label>
                            <div className="absolute  left-0 p-6 mt-2  rounded-lg w-full transition-all duration-500 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1 -z-20">
                                Content-2
                            </div>
                        </li>
                        <li className="">
                            <input
                                className="peer sr-only"
                                type="radio"
                                defaultValue="others"
                                name="answer"
                                id="others"
                            />
                            <label
                                className="flex justify-center cursor-pointer  border-b-2 py-1 px-2 text-base focus:outline-none peer-checked:border-transparent peer-checked:border-b-indigo-500 transition-all duration-500 ease-in-out"
                                htmlFor="others">
                                Others
                            </label>
                            <div className="absolute  left-0 p-6 mt-2  rounded-lg w-full transition-all duration-500 ease-in-out  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                                Content-3
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
