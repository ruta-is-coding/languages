import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import UploadPhoto from "@/Components/UploadPhoto";
import CountrySelect from "@/Components/CountrySelect";

const CreateMeetup = ({ auth, countries }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Create a meetup" />
            <section>
                <Container>
                    <h1>Create your meetup</h1>
                    <div className="flex justify-center">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                            <TextInput
                                label="Meetup title"
                                id="title"
                                placeholder="Enter the title (max 200 characters)"
                            />
                            <TextInput
                                label="City"
                                id="city"
                                placeholder="Enter the city (max 100 characters)"
                            />
                            <TextArea />
                            <UploadPhoto />
                            <CountrySelect countries={countries} />
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                >
                                    Pick a date:
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="block w-full px-3 py-2 border rounded-md text-gray-700"
                                ></input>
                            </div>
                            <button className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white">
                                Create
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default CreateMeetup;
