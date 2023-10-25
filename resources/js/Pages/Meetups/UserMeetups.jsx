import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import { Head } from "@inertiajs/react";

const UserMeetups = ({ auth, userMeetups }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="My meetups" />
            <section>
                <Container>
                    <h1>My meetups</h1>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
