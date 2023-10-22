import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="row text-right">
                {auth.user ? (
                    <Link
                        to={route("dashboard")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <GuestLayout>
                        <h1>Expand your horizons through languages</h1>
                        <div className="row pt-5">
                            <button class="bg-rose-700 hover:bg-rose-600 py-2 px-4 rounded">
                                <Link
                                    href={route("register")}
                                    className="text-white font-bold hover:text-white"
                                >
                                    Join us!
                                </Link>
                            </button>
                        </div>
                    </GuestLayout>
                )}
            </div>
        </>
    );
}
