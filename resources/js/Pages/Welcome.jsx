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
                        <Head title="Language meetups" />
                        <h1 className="animate__animated animate__fadeIn animate__slower">
                            Expand your horizons through languages,
                            <br />
                            <span className="subheader">find new friends</span>
                        </h1>
                        <div className="flex md:flex-row flex-col justify-center items-center gap-3 my-10 md:pl-10">
                            <p>Want to organize meetups?</p>
                            <Link
                                href={route("register")}
                                className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 md:py-3 py-2 md:px-5 px-3 rounded-lg transition-all ease-in-out duration-150"
                            >
                                Join us!
                            </Link>
                        </div>
                    </GuestLayout>
                )}
            </div>
        </>
    );
}
