import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Container from "@/Components/Container";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Language meetups" />
            <section>
                <Container>
                    <h1>Welcome on board!</h1>
                    <div className="flex justify-center items-center gap-3">
                        <p>
                            Create your own meetup{" "}
                            <span className="font-bold">here:</span>
                        </p>
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
}
