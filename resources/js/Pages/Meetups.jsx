import GuestLayout from "@/Layouts/GuestLayout";

const Meetups = ({ meetupsList }) => {
    console.log(meetupsList);
    return (
        <GuestLayout>
            <h1>Language meetups</h1>
            <div class="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-10 justify-items-center">
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
