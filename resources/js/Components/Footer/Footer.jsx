import "./Footer.css";
import { Link } from "@inertiajs/react";
import ArrowUp from "@/Icons/ArrowUp";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="grid grid-cols-3 md:gap-x-3 gap-x-7">
                    <nav className="col-span-1">
                        <ul>
                            <li>
                                <Link href="#">Instagram</Link>
                            </li>
                            <li>
                                <Link href="#">Twitter</Link>
                            </li>
                            <li>
                                <Link href="#">Youtube</Link>
                            </li>
                            <li>
                                <Link href="#">LinkedIn</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="col-span-1">
                        <ul>
                            <li>
                                <Link href="#">About us</Link>
                            </li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="col-span-1">
                        <ul>
                            <li>
                                <Link href="#">How it works</Link>
                            </li>
                            <li>
                                <Link href="#">Sustainability</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy policy</Link>
                            </li>
                            <li>
                                <Link href="#">Terms and conditions</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ArrowUp />
            </div>
        </footer>
    );
};

export default Footer;
