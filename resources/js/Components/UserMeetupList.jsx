import { Link } from "@inertiajs/react";
import DeleteIcon from "@/Icons/DeleteIcon";
import EditIcon from "@/Icons/EditIcon";

const UserMeetupList = ({ meetups }) => {
    console.log(meetups);
    return (
        <div className="grid md:grid-cols-3 gap-x-3 md:gap-y-7 gap-y-1 justify-items-center">
            {meetups.map((meetup) => (
                <div
                    className="col-span-1 w-full flex flex-col gap-2 items-center relative"
                    key={meetup.id}
                >
                    <div className="h-2/3 md:w-full mt-7">
                        <img
                            src={`/storage/${meetup.photo}`}
                            alt={meetup.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <h3>{meetup.name}</h3>
                        <p className="text-center">{meetup.date}</p>
                    </div>
                    <div className="absolute top-1 right-2">
                        <Link
                            className="inline-block"
                            href={`/my-meetups/edit/${meetup.id}`}
                        >
                            <EditIcon />
                        </Link>
                        <Link className="ml-1 inline-block">
                            <DeleteIcon />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserMeetupList;
