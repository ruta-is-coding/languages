import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";
import Burger from "@/Components/Burger";
import { useState } from "react";

const Header = ({ auth }) => {
    const [burgerClick, setBurgerClick] = useState(false);
    const [menuVisibility, setMenuVisibility] = useState("hidden");

    const updateMenu = () => {
        if (!burgerClick) {
            // Set burgerClick to true on the first click
            setBurgerClick(true);
            setMenuVisibility("flex flex-col");
        } else {
            // Toggle burgerClick on subsequent clicks
            setBurgerClick(!burgerClick);
            setMenuVisibility("hidden");
        }
    };

    return (
        <header className="md:px-0 px-1 w-full bg-rose-100">
            <div className="container flex justify-between lg:gap-10 md:gap-7 md:px-1 px-7 mx-auto md:py-8 py-7">
                <div className="flex md:items-center md:flex-row md:gap-0 flex-col gap-3 items-start">
                    <Logo />
                    <h2 className="md:text-center text-left text-rose-500">
                        Language meetups
                    </h2>
                </div>
                <nav className="flex md:justify-center md:items-center gap-3 flex-col">
                    <Burger
                        burgerClick={burgerClick}
                        updateMenu={updateMenu}
                        menuVisibility={menuVisibility}
                    />
                    <div
                        className={`md:flex md:flex-row items-end flex-col lg:gap-5 md:gap-3 ${menuVisibility}`}
                    >
                        <Link href={route("home")}>Home</Link>
                        <Link href={route("meetups")}>Meetups</Link>
                        <Link href={route("about")}>About</Link>
                        <Link href={route("contact")}>Contact</Link>
                        <Link href={route("login")}>Login</Link>
                        <Link href={route("register")}>Register</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
