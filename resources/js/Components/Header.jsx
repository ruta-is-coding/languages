import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";
import Burger from "@/Components/Burger";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";

const Header = ({ user }) => {
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
                        className={`md:flex md:flex-row items-center flex-col lg:gap-5 md:gap-3 ${menuVisibility}`}
                    >
                        <Link href={route("home")}>Home</Link>
                        <Link href={route("meetups")}>Meetups</Link>
                        <Link href={route("about")}>About</Link>
                        <Link href={route("contact")}>Contact</Link>
                        {!user && (
                            <>
                                <Link href={route("login")}>Login</Link>
                                <Link href={route("register")}>Register</Link>
                            </>
                        )}
                        {/* DropDown */}
                        {user && (
                            <div className="hidden sm:flex sm:items-center">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-rose-500 lg:text-xl text-base font-normal leading-4 rounded-md bg-rose-100 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="rgb(244 63 94)"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href="/dashboard">
                                                Dashboard
                                            </Dropdown.Link>
                                            <Dropdown.Link href="/my-meetups">
                                                My meetups
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
