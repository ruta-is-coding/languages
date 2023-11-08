import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome({ auth }) {
    return (
        <>
            <GuestLayout user={auth.user}>
                <Head title="Language meetups" />
                <h1 className="animate__animated animate__fadeIn animate__slower">
                    {auth.user
                        ? "Welcome on board!"
                        : "Expand your horizons through languages,"}
                    <br />
                    <span className="subheader">
                        {auth.user
                            ? "Create your own meetup here:"
                            : "find new friends"}
                    </span>
                </h1>
                <div className="flex md:flex-row flex-col justify-center items-center gap-3 my-10 md:pl-10">
                    {auth.user ? (
                        <Link
                            href={route("meetup.new")}
                            className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 py-3 md:px-5 px-4 rounded-lg transition ease-in-out duration-150"
                        >
                            Create
                        </Link>
                    ) : (
                        <>
                            <p>Want to organize meetups?</p>
                            <Link
                                href={route("register")}
                                className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 md:py-3 py-2 md:px-5 px-3 rounded-lg transition-all ease-in-out duration-150"
                            >
                                Join us!
                            </Link>
                        </>
                    )}
                </div>
            </GuestLayout>
        </>
    );
}
