import { Link } from "@inertiajs/react";

const MeetupList = ({ meetups }) => {
    return (
        <div className="cardGrid">
            {meetups.map((meetup) => (
                <Link href={`/meetups/${meetup.id}`}>
                    <div className="card" key={meetup.id}>
                        <div className="md:w-full md:h-40">
                            <img
                                src={`/storage/${meetup.photo}`}
                                alt={meetup.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="grid grid-rows-2 gap-y-5 h-28 items-center mt-3">
                            <h3 className="md:text-lg text-2xl my-1 row-span-1">
                                {meetup.name}
                            </h3>
                            <div className="description row-span-1">
                                <p className="text-center text-base">
                                    City: {meetup.city}
                                </p>
                                <p className="text-center text-base">
                                    {meetup.date}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MeetupList;
