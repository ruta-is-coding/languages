import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Button from "@/Components/Button";

const SingleMeetup = ({ meetup }) => {
    console.log(meetup);
    return (
        <GuestLayout>
            <Head title="Meetup" />
            <div className="absolute">
                <Button title="Back" link="/meetups" />
            </div>
            <h1 className="mt-16">{meetup.name}</h1>
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
                                {meetup.languages.map((language) => (
                                    <li>{language.language_name}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </GuestLayout>
    );
};

export default SingleMeetup;
