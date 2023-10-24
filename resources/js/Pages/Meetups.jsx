import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

const Meetups = ({ meetupsList, countries }) => {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [originalMeetups, setOriginalMeetups] = useState(meetupsList);
    const [meetups, setMeetups] = useState(meetupsList);

    useEffect(() => {
        if (selectedCountryId) {
            const filteredMeetups = originalMeetups.filter(
                (meetup) => meetup.country_id == selectedCountryId
            );
            setMeetups(filteredMeetups);
        } else {
            setMeetups(originalMeetups);
        }
    }, [selectedCountryId, originalMeetups]);

    console.log(meetups, selectedCountryId);

    return (
        <GuestLayout>
            <Head title="Meetup list" />
            <h1>Meet new people from all over the world</h1>
            {/* Countries */}
            <div className="row mt-18 mb-7">
                <div className="mb-5">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-3"
                        htmlFor="countries"
                    >
                        Select a country
                    </label>
                    <select
                        name="country_id"
                        id="countries"
                        className="block py-2.5 px-3 w-50 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={(e) => {
                            setSelectedCountryId(e.target.value);
                        }}
                    >
                        <option
                            className="text-sm py-3 hover:bg-rose-100"
                            value=""
                        >
                            All countries
                        </option>
                        {countries.map((country) => (
                            <option
                                key={country.id}
                                value={country.id}
                                className="text-sm py-3 hover:bg-rose-100"
                            >
                                {country.country_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Meetups list */}
            <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-10 justify-items-center">
                {meetups.map((meetup) => (
                    <div
                        className="flex flex-col gap-2 items-center mt-3"
                        key={meetup.id}
                    >
                        <div className="h-1/2">
                            <img
                                src={`/storage/${meetup.photo}`}
                                alt={meetup.name}
                                className="h-full"
                            />
                        </div>
                        <div>
                            <h3>{meetup.name}</h3>
                            <p className="text-center">City: {meetup.city}</p>
                            <p className="text-center">{meetup.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
};

export default Meetups;
