import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Container from "@/Components/Container";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Language meetups" />
            <section>
                <Container>
                    <h1></h1>
                    <div className="flex justify-center items-center gap-3">
                        <p>
                            {" "}
                            <span className="font-bold">here:</span>
                        </p>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
}
