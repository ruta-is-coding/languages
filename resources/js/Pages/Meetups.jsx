import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import CountrySelect from "@/Components/CountrySelect";

const Meetups = ({ meetupsList, countries }) => {
    console.log(countries);
    return (
        <GuestLayout>
            <Head title="Meetup list" />
            <h1>Meet new people from all over the world</h1>
            {/* Countries */}
            <div className="row mt-18 mb-7">
                <CountrySelect countries={countries} required={false} />
            </div>
            {/* Meetups list */}
            <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-10 justify-items-center">
                {meetupsList.map((meetup) => (
                    <div
                        className="flex flex-col md:gap-1 gap-1 items-center mt-3"
                        key={meetup.id}
                    >
                        <img
                            src={meetup.photo}
                            alt={meetup.name}
                            className="w-full"
                        />
                        <h3>{meetup.name}</h3>
                        <p className="text-center">City: {meetup.city}</p>
                        <p className="text-center">{meetup.date}</p>
                    </div>
                ))}
            </div>
        </GuestLayout>
    );
};

export default Meetups;
