import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import UploadPhoto from "@/Components/UploadPhoto";
import CountrySelect from "@/Components/CountrySelect";
import DatePicker from "@/Components/DatePicker";
import TimePicker from "@/Components/TimePicker";

const CreateMeetup = ({ auth, countries, csrf_token }) => {
    const { errors } = usePage().props;
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        router.post("/meetup/create", data);
    }
    console.log(errors);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Create a meetup" />
            <section>
                <Container>
                    <h1>Create a meetup</h1>
                    <div className="flex flex-col items-center">
                        {JSON.stringify(errors) != "{}" && (
                            <div className="border border-red-400 rounded bg-red-100 px-4 py-3 mb-10 text-red-700 w-full max-w-md">
                                {Object.keys(errors).map((key, index) => (
                                    <p key={index}>{errors[key]}</p>
                                ))}
                            </div>
                        )}
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
                        >
                            <TextInput
                                label="Meetup title"
                                id="title"
                                name="name"
                                placeholder="Enter the title (min 5, max 200 characters)"
                            />
                            <TextInput
                                label="City"
                                id="city"
                                name="city"
                                placeholder="Enter the city (min 3, max 200 characters)"
                            />
                            <TextInput
                                label="Meetup place"
                                id="place"
                                name="place"
                                placeholder="Write exact place (min 5, max 200 characters)"
                            />
                            <TextArea name="description" />
                            <UploadPhoto />
                            <CountrySelect
                                countries={countries}
                                required={true}
                            />
                            <DatePicker />
                            <TimePicker />
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token}
                            />
                            <button className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white">
                                Create
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
        // </MeetupProvider>
    );
};

export default CreateMeetup;
