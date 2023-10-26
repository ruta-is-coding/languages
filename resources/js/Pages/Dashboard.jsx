import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Button from "@/Components/Button";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Language meetups" />
            <section>
                <Container>
                    <h1>Welcome on board!</h1>
                    <div className="flex justify-end items-center gap-3 pt-5">
                        <p>
                            Create your own meetup{" "}
                            <span className="font-bold">here:</span>
                        </p>
                        <Button title="Create" link="/meetup/create" />
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
}
