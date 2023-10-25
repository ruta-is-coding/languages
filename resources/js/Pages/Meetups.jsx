import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import CountryFilter from "@/Components/CountryFilter";
import LanguageFilter from "@/Components/LanguageFilter";

const Meetups = ({ meetupsList, countries, languages }) => {
    const [originalMeetups, setOriginalMeetups] = useState(meetupsList);
    const [meetups, setMeetups] = useState(meetupsList);
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);

    console.log(meetupsList);

    useEffect(() => {
        // Filter by both country and language
        if (selectedCountryId && selectedLanguageId) {
            const filteredMeetups = originalMeetups.filter(
                (meetup) =>
                    meetup.country_id === +selectedCountryId &&
                    meetup.languages.some(
                        (language) => language.id === +selectedLanguageId
                    )
            );
            setMeetups(filteredMeetups);
            // Filter by country
        } else if (selectedCountryId) {
            const filteredMeetups = originalMeetups.filter(
                (meetup) => meetup.country_id === +selectedCountryId
            );
            setMeetups(filteredMeetups);
            // Filter by language
        } else if (selectedLanguageId) {
            const filteredMeetups = originalMeetups.filter((meetup) =>
                meetup.languages.some(
                    (language) => language.id === +selectedLanguageId
                )
            );
            setMeetups(filteredMeetups);
            // No filter
        } else {
            setMeetups(originalMeetups);
        }
    }, [selectedCountryId, originalMeetups, selectedLanguageId]);

    return (
        <GuestLayout>
            <Head title="Meetup list" />
            <h1>Meet new people from all over the world</h1>
            {/* Countries */}
            <div className="md:flex gap-5 mt-18 mb-7">
                <CountryFilter
                    countries={countries}
                    setSelectedCountryId={setSelectedCountryId}
                />
                {/* Languages */}
                <LanguageFilter
                    languages={languages}
                    setSelectedLanguageId={setSelectedLanguageId}
                />
            </div>
            {/* Meetups list */}
            <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-1 justify-items-center">
                {meetups.map((meetup) => (
                    <div
                        className="md:col-span-1 flex flex-col gap-2 items-center mt-3"
                        key={meetup.id}
                    >
                        <div className="h-1/2 md:w-40">
                            <img
                                src={`/storage/${meetup.photo}`}
                                alt={meetup.name}
                                className="h-full w-full object-cover"
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
