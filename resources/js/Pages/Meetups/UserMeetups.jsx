import { Head, usePage, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import UserMeetupList from "@/Components/UserMeetupList";
import Success from "@/Components/Success";
import Pagination from "@/Components/Pagination/Pagination";

const UserMeetups = ({ auth, user_meetups }) => {
    const { flash } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const meetups = user_meetups;
    const currentCards = meetups.slice(firstCardIndex, lastCardIndex);

    useEffect(() => {
        if (flash.message) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, "1500");
        }
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My meetups" />

            <section>
                <Container>
                    {showMessage && <Success flash={flash} />}
                    <h1>My meetups</h1>
                    <div className="flex justify-center items-center gap-3 my-10">
                        <p>Create another meetup</p>
                        <Link
                            href={route("meetup.new")}
                            className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 py-3 md:px-5 px-4 rounded-lg transition ease-in-out duration-150"
                        >
                            Create
                        </Link>
                    </div>
                    <UserMeetupList meetups={currentCards} />
                    {meetups.length !== 0 ? (
                        <Pagination
                            totalCards={meetups.length}
                            cardsPerPage={cardsPerPage}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                    ) : (
                        <h3 className="my-10">
                            You don't have any meetups (so far) &#128532;
                        </h3>
                    )}
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
