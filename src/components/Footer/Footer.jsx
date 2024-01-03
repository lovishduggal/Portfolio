import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="flex flex-wrap text-center justify-center">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Experience</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaTwitter className="fill-current" size={'24px'} />

                    <a>
                        <FaFacebook className="fill-current" size={'24px'} />
                    </a>
                    <a>
                    <FaLinkedin className="fill-current" size={'24px'} />
                    </a>
                </div>
            </nav>
            <aside>
                <p>© 2023 Tania Duggal. All right reserved.</p>
            </aside>
        </footer>
    );
}

export default Footer;
