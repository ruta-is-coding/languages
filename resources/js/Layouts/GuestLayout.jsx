import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";
import { useState } from "react";
import Burger from "@/Components/Burger";

export default function Guest({ children }) {
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
        console.log(menuVisibility);
    };

    return (
        <header className="shadow-lg md:py-10 py-5 md:px-0 px-1 w-full">
            <div className="container flex justify-between lg:gap-9 md:gap-7 md:px-1 px-7">
                <div className="flex md:items-center md:flex-row md:gap-0 flex-col gap-3 items-start">
                    <Logo />
                    <h2>Language meetups</h2>
                </div>
                <nav className="flex md:justify-center md:items-center gap-3 flex-col">
                    <Burger
                        burgerClick={burgerClick}
                        updateMenu={updateMenu}
                        menuVisibility={menuVisibility}
                    />
                    <div
                        className={`md:flex md:flex-row items-end flex-col lg:gap-7 md:gap-3 ${menuVisibility}`}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/meetups">Meetups</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        {children}
                    </div>
                </nav>
            </div>
        </header>
    );
}
