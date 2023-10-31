import { Head, Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import CountryFilter from "@/Components/CountryFilter";
import LanguageFilter from "@/Components/LanguageFilter";
import MeetupList from "@/Components/MeetupList";

const Meetups = ({ meetupsList, countries, languages }) => {
    const { flash } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);
    const originalMeetups = meetupsList;
    const [meetups, setMeetups] = useState(meetupsList);
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);

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

    // Display success message
    useEffect(() => {
        if (flash.message) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, "1500");
        }
    }, []);

    return (
        <GuestLayout>
            <Head title="Meetup list" />
            {showMessage && (
                <div className="flex justify-center">
                    <div className="border border-green-400 rounded bg-green-100 px-4 py-3 text-green-700 w-full max-w-sm">
                        <p>{flash.message}</p>
                    </div>
                </div>
            )}
            <div className="absolute">
                <Link
                    href="/"
                    className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-400 hover:bg-rose-500 py-3 md:px-4 px-3 rounded-lg transition ease-in-out duration-150"
                >
                    Home
                </Link>
            </div>

            <h1>Meet new people from all over the world</h1>
            {/* Countries */}
            <div className="md:flex gap-5 mt-20 mb-7">
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
            {/* Meetup list */}
            <MeetupList meetups={meetups} />
        </GuestLayout>
    );
};

export default Meetups;
