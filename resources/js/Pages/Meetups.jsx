import GuestLayout from "@/Layouts/GuestLayout";

const Meetups = ({ meetupsList, countries }) => {
    console.log(countries);
    return (
        <GuestLayout>
            <h1>Meet new people from all over the world</h1>
            {/* Countries */}
            <div className="row mt-18">
                <select className="my-7 block py-2.5 px-3 w-50 text-sm text-rose-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-rose-200 peer">
                    <option className="text-sm py-3 text-rose-700 hover:bg-rose-100">
                        All countries
                    </option>
                    {countries.map((country) => (
                        <option
                            key={country.id}
                            value={country.id}
                            className="text-sm py-3 text-rose-700 hover:bg-rose-100"
                        >
                            {country.country_name}
                        </option>
                    ))}
                </select>
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
