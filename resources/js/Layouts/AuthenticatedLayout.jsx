import { useState } from "react";
import { Link } from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import Logo from "@/Components/Logo";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header";

export default function Authenticated({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            {/* <header className="md:px-0 px-1 w-full bg-rose-100">
                <div className="container flex justify-between lg:gap-10 md:gap-7 md:px-1 px-7 mx-auto md:py-10 py-7">
                    <div className="flex md:items-center md:flex-row md:gap-0 flex-col gap-3 items-start">
                        <Logo />
                        <Link
                            href="/dashboard"
                            className="hover:scale-100 hover:text-rose-400"
                        >
                            <h2>My dashboard</h2>
                        </Link>
                    </div>



                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-4 pb-1">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}

            {/* {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )} */}
            <Header user={user} />
            <main className="bg-rose-50">{children}</main>
            <Footer />
        </>
    );
}
