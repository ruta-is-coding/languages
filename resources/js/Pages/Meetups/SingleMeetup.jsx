import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

const SingleMeetup = ({ meetup, username, email }) => {
    return (
        <GuestLayout>
            <Head title="Meetup" />
            <div className="absolute">
                <Link
                    href={route("meetups")}
                    className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-400 hover:bg-rose-500 py-3 md:px-5 px-4 rounded-lg transition ease-in-out duration-150"
                >
                    Back
                </Link>
            </div>
            <h1 className="mt-16 mb-10 md:mb-16">{meetup.name}</h1>
            <div className="grid md:grid-cols-5 md:gap-14 gap-3">
                <div className="col-span-3">
                    <img
                        src={`/storage/${meetup.photo}`}
                        alt="Meetup photo"
                        className="w-100 mb-5"
                    />
                    <div className="flex justify-end items-center gap-3">
                        <p>Want to participate?</p>
                        <Link
                            href={`/meetups/${meetup.id}/register`}
                            className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 py-2 md:px-5 px-3 rounded-lg transition ease-in-out duration-150"
                        >
                            Join
                        </Link>
                    </div>
                </div>

                <div className="md:pl-0 meetup-info col-span-2">
                    <p>
                        <span>Description:</span> {meetup.description}
                    </p>
                    <p>
                        <span>City:</span> {meetup.city}
                    </p>
                    <p>
                        <span>Meetup place:</span> {meetup.place}
                    </p>
                    <p>
                        <span>Date:</span> {meetup.date}
                    </p>
                    <p>
                        <span>Time:</span> {meetup.time}
                    </p>
                    <div className="mb-4">
                        <span>Languages:</span>{" "}
                        <ol className="list-decimal pl-10 mt-2">
                            {meetup.languages.map((language, index) => (
                                <li key={index}>{language.language_name}</li>
                            ))}
                        </ol>
                    </div>
                    <p>
                        <span>Organizator:</span> {username}
                    </p>
                    <p>
                        <span>Contact:</span> {email}
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
};

export default SingleMeetup;
