import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import UserMeetupList from "@/Components/UserMeetupList";
import { Head } from "@inertiajs/react";

const UserMeetups = ({ auth, user_meetups }) => {
    console.log(user_meetups);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My meetups" />
            <section>
                <Container>
                    <h1>My meetups</h1>
                    <UserMeetupList meetups={user_meetups} />
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
