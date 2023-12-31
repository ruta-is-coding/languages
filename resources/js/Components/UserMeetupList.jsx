import { useState } from "react";
import { Link } from "@inertiajs/react";
import DeleteIcon from "@/Icons/DeleteIcon";
import EditIcon from "@/Icons/EditIcon";
import DeleteModal from "./DeleteModal";
import Loader from "./Loader/Loader";

const UserMeetupList = ({ meetups, csrf_token }) => {
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <>
            {showModal && (
                <DeleteModal
                    deleteId={deleteId}
                    csrf_token={csrf_token}
                    setShowModal={setShowModal}
                    setLoading={setLoading}
                />
            )}
            {loading && <Loader />}
            {/* Meetup list */}
            <div className="cardGrid">
                {meetups.map((meetup) => (
                    <div className="card" key={meetup.id}>
                        <div className="md:w-full md:h-44 mt-10">
                            <img
                                src={`/storage/${meetup.photo}`}
                                alt={meetup.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="md:text-lg text-2xl my-1">
                                {meetup.name}
                            </h3>
                            <p className="text-center text-base ">
                                {meetup.date}
                            </p>
                        </div>
                        <div className="absolute top-1 right-2">
                            <Link
                                className="inline-block"
                                href={`/my-meetups/edit/${meetup.id}`}
                            >
                                <EditIcon />
                            </Link>
                            <button
                                className="ml-1 inline-block"
                                onClick={() => {
                                    setShowModal(true);
                                    setDeleteId(meetup.id);
                                }}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserMeetupList;
