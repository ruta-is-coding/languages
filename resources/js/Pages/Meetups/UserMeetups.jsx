import { Head, usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import UserMeetupList from "@/Components/UserMeetupList";

const UserMeetups = ({ auth, user_meetups }) => {
    const { flash } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (flash.message) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, "3000");
        }
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My meetups" />

            <section>
                <Container>
                    {showMessage && (
                        <div className="flex justify-center">
                            <div className="border border-green-400 rounded bg-green-100 px-4 py-3 text-green-700 w-full max-w-sm">
                                <p>{flash.message}</p>
                            </div>
                        </div>
                    )}
                    <h1>My meetups</h1>
                    <UserMeetupList meetups={user_meetups} />
                    <div className="flex justify-end items-center gap-3 mt-14">
                        <p>Create another meetup</p>
                        <Link
                            href={route("meetup.new")}
                            className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 py-3 md:px-5 px-4 rounded-lg transition ease-in-out duration-150"
                        >
                            Create
                        </Link>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
