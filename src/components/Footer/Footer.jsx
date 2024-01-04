import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="flex flex-wrap text-center justify-center">
                <a href="#About">About</a>
                <a href="#Experience">Experience</a>
                <a href="#Services">Services</a>
                <a href="#Blog">Blog</a>
                <a href="#Contact">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://twitter.com/taniadtwt" target="blank">
                        {' '}
                        <FaTwitter
                            className="fill-current cursor-pointer"
                            size={'24px'}
                        />
                    </Link>

                    <Link
                        to="https://www.instagram.com/taniaduggal_60/"
                        target="blank">
                        <FaInstagram
                            className="fill-current cursor-pointer"
                            size={'24px'}
                        />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/tania-duggal-07a297220/"
                        target="blank">
                        <FaLinkedin
                            className="fill-current cursor-pointer"
                            size={'24px'}
                        />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>© 2023 Tania Duggal. All right reserved.</p>
            </aside>
        </footer>
    );
}

export default Footer;
