import { Head, router, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import TextInput from "@/Components/TextInput";
import Errors from "@/Components/Error";

const Registration = ({ meetup, csrf_token }) => {
    const { errors } = usePage().props;
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        router.post(`/meetups/${meetup.id}/register`, data);
    }
    return (
        <GuestLayout>
            <Head title="Register to a meetup" />

            {/* Error messages */}
            <Errors errors={errors} />
            {/* Registration form */}
            <div className="flex flex-col items-center py-10">
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="roseForm"
                >
                    <h2 className="text-center lg:text-5xl md:text-4xl mt-14 mb-20 leading-loose">
                        Register to:
                        <br />
                        {meetup.name}
                    </h2>
                    <TextInput
                        label="Your email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <TextInput
                        label="Full name"
                        id="full_name"
                        name="full_name"
                        placeholder="Enter your full name"
                    />
                    <input type="hidden" name="_token" value={csrf_token} />
                    <button className="bg-rose-700 hover:bg-rose-600 md:py-3 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white mt-5">
                        Register
                    </button>
                </form>
            </div>
        </GuestLayout>
    );
};

export default Registration;
