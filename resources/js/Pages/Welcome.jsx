import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Language meetups" />
            <div className="row text-right">
                {auth.user ? (
                    <Link
                        to={route("dashboard")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <GuestLayout />
                )}
            </div>
        </>
    );
}
