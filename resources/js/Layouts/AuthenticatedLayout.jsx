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
            <Header user={user} />
            <main className="bg-rose-50">{children}</main>
            <Footer />
        </>
    );
}
