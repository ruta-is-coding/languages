import { Head, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import UserMeetupList from "@/Components/UserMeetupList";
import Button from "@/Components/Button";

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
                    <div className="flex justify-end items-center gap-3 pt-5">
                        <p>Create another meetup</p>
                        <Button title="Create" link="/meetup/create" />
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
