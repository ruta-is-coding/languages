import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

const SingleMeetup = ({ meetup, username, email }) => {
    return (
        <GuestLayout>
            <Head title="Meetup" />
            <div className="absolute">
                <Link
                    href={route("meetups")}
                    className="btn text-white font-bold hover:text-white text-base md:text-lg bg-rose-700 hover:bg-rose-600 py-3 md:px-5 px-4 rounded-lg transition ease-in-out duration-150"
                >
                    Back
                </Link>
            </div>
            <h1 className="mt-16 mb-10 md:mb-16">{meetup.name}</h1>
            <div className="grid md:grid-cols-3 md:gap-14 gap-3">
                <img
                    src={`/storage/${meetup.photo}`}
                    alt="Meetup photo"
                    className="w-100 my-3 col-span-2"
                />
                <div className="md:pl-0 pl-5">
                    <ul className="list-disc">
                        <li>
                            <span className="font-bold">Description:</span>{" "}
                            {meetup.description}
                        </li>
                        <li>
                            <span className="font-bold">City:</span>{" "}
                            {meetup.city}
                        </li>
                        <li>
                            <span className="font-bold">Meetup place:</span>{" "}
                            {meetup.place}
                        </li>
                        <li>
                            <span className="font-bold">Date:</span>{" "}
                            {meetup.date}
                        </li>
                        <li>
                            <span className="font-bold">Time:</span>{" "}
                            {meetup.time}
                        </li>
                        <li>
                            <span className="font-bold">Languages:</span>{" "}
                            <ul className="list-disc pl-5 mt-2">
                                {meetup.languages.map((language, index) => (
                                    <li key={index}>
                                        {language.language_name}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-rose-700">
                                Organizator:
                            </span>{" "}
                            {username}
                        </li>
                        <li>
                            <span className="font-bold text-rose-700">
                                Contact:
                            </span>{" "}
                            {email}
                        </li>
                    </ul>
                </div>
            </div>
        </GuestLayout>
    );
};

export default SingleMeetup;
