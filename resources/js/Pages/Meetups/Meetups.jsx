import { Head, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import CountryFilter from "@/Components/CountryFilter";
import LanguageFilter from "@/Components/LanguageFilter";
import MeetupList from "@/Components/MeetupList";
import Success from "@/Components/Success";
import Pagination from "@/Components/Pagination/Pagination";

const Meetups = ({ meetupsList, countries, languages }) => {
    const { flash } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);
    const originalMeetups = meetupsList;
    const [meetups, setMeetups] = useState(meetupsList);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCards = meetups.slice(firstCardIndex, lastCardIndex);

    useEffect(() => {
        filterMeetups();
    }, [selectedCountryId, originalMeetups, selectedLanguageId]);

    useEffect(() => {
        displaySuccessMessage();
    }, []);

    const filterMeetups = () => {
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
    };

    const displaySuccessMessage = () => {
        if (flash.message) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 1500);
        }
    };

    return (
        <GuestLayout>
            <Head title="Meetup list" />
            {showMessage && <Success flash={flash} />}
            <h1 className="animate__animated animate__fadeIn animate__slower">
                Meet new people from all over the world
            </h1>
            {/* Filter */}
            <div className="md:flex gap-5 mt-20 mb-7">
                <CountryFilter
                    countries={countries}
                    setSelectedCountryId={setSelectedCountryId}
                />
                <LanguageFilter
                    languages={languages}
                    setSelectedLanguageId={setSelectedLanguageId}
                />
            </div>
            <MeetupList meetups={currentCards} />
            {meetups.length !== 0 ? (
                <Pagination
                    totalCards={meetups.length}
                    cardsPerPage={cardsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            ) : (
                <h3 className="my-10">
                    No meetups for this criteria (so far) &#128532;
                </h3>
            )}
        </GuestLayout>
    );
};

export default Meetups;
