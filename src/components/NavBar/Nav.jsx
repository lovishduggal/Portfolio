function Nav() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className=" btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium ">
                        <li>
                            <a className="text-base">About</a>
                        </li>
                        <li>
                            <a className="text-base">Experience</a>
                        </li>
                        <li>
                            <a className="text-base">Services</a>
                        </li>
                        <li>
                            <a className="text-base">Blog</a>
                        </li>
                        <li>
                            <a className="text-base">Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tania</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li>
                        <a className="text-base" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-base " href="#Experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className="text-base">Services</a>
                    </li>
                    <li>
                        <a className="text-base">Blog</a>
                    </li>
                    <li>
                        <a className="text-base">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-base">Meet Now</a>
            </div>
        </div>
    );
}

export default Nav;
