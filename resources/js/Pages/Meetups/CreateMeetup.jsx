import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import UploadPhoto from "@/Components/UploadPhoto";
import CountrySelect from "@/Components/CountrySelect";
import DatePicker from "@/Components/DatePicker";
import TimePicker from "@/Components/TimePicker";
import MeetupProvider from "./MeetupProvider";
import { useState } from "react";

const CreateMeetup = ({ auth, countries }) => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [countryId, setCountryId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return (
        <AuthenticatedLayout user={auth.user}>
            <MeetupProvider>
                <Head title="Create a meetup" />
                <section>
                    <Container>
                        <h1>Create a meetup</h1>
                        <div className="flex justify-center">
                            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                                <TextInput
                                    label="Meetup title"
                                    id="title"
                                    placeholder="Enter the title (max 200 characters)"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextInput
                                    label="City"
                                    id="city"
                                    placeholder="Enter the city (max 100 characters)"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <TextArea
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                                <UploadPhoto />
                                <CountrySelect
                                    countries={countries}
                                    required={true}
                                    onSelect={(e) =>
                                        setCountryId(e.target.value)
                                    }
                                />
                                <DatePicker
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <TimePicker
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                                <button className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white">
                                    Create
                                </button>
                            </div>
                        </div>
                    </Container>
                </section>
            </MeetupProvider>
        </AuthenticatedLayout>
    );
};

export default CreateMeetup;
