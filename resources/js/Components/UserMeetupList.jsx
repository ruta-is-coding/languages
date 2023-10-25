import { Link } from "@inertiajs/react";

const UserMeetupList = ({ meetups }) => {
    return (
        <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-1 justify-items-center">
            {meetups.map((meetup) => (
                <div
                    className="md:col-span-1 flex flex-col gap-2 items-center mt-3"
                    key={meetup.id}
                >
                    <div className="h-1/2 md:w-40">
                        <Link>
                            <img
                                src={`/storage/${meetup.photo}`}
                                alt={meetup.name}
                                className="h-full w-full object-cover"
                            />
                        </Link>
                    </div>
                    <div>
                        <h3>{meetup.name}</h3>
                        <p className="text-center">City: {meetup.city}</p>
                        <p className="text-center">{meetup.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserMeetupList;
