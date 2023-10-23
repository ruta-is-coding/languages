import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import { Head } from "@inertiajs/react";
import MeetupProvider from "./MeetupProvider";

const UserMeetups = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <MeetupProvider>
                <Head title="My meetups" />
                <section>
                    <Container>
                        <h1>My meetups</h1>
                    </Container>
                </section>
            </MeetupProvider>
        </AuthenticatedLayout>
    );
};

export default UserMeetups;
