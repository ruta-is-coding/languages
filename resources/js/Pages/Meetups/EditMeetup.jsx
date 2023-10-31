import { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";

const EditMeetup = ({ auth, countries, meetup, csrf_token, id }) => {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        name: meetup[0].name,
        city: meetup[0].city,
        place: meetup[0].place,
        description: meetup[0].description,
        photo: "",
        country_id: meetup[0].country_id,
        date: meetup[0].date,
        time: meetup[0].time,
    });

    //Change values
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    //Submit editing form
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        router.post(`/my-meetups/edit/${id}`, data);
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit a meetup" />
            <section>
                <Container>
                    <h1>Edit your meetup: {meetup.name}</h1>
                    {JSON.stringify(errors) != "{}" && (
                        <div className="flex justify-center">
                            <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700 w-full max-w-sm mb-5">
                                {Object.keys(errors).map((key, index) => (
                                    <p
                                        key={index}
                                        className="text-sm md:text-base"
                                    >
                                        {errors[key]}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-center">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
                        >
                            {/* Meetup title */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="name"
                                >
                                    Meetup name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Enter the title (max 200 characters)"
                                    required
                                ></input>
                            </div>
                            {/* City */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="city"
                                >
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500"
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={values.city}
                                    onChange={handleChange}
                                    placeholder="Enter the city (max 200 characters)"
                                    required
                                ></input>
                            </div>
                            {/* Meetup place */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="place"
                                >
                                    Meetup place
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500"
                                    id="place"
                                    name="place"
                                    type="text"
                                    value={values.place}
                                    onChange={handleChange}
                                    placeholder="Write your exact meetup place (max 200 characters)"
                                    required
                                ></input>
                            </div>
                            {/* Meetup description */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="block p-2.5 w-full text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500"
                                    rows="4"
                                    placeholder="Describe your meetup here..."
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            {/* Photo */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="photo"
                                >
                                    Change the photo
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    value={values.photo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Country */}
                            <div className="mb-5">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                    htmlFor="country_id"
                                >
                                    Select a country
                                </label>
                                <select
                                    id="country_id"
                                    name="country_id"
                                    className="block py-2.5 px-3 w-50 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    required
                                    value={values.country_id}
                                    onChange={handleChange}
                                >
                                    <option
                                        className="text-sm py-3 hover:bg-rose-100"
                                        value=""
                                    >
                                        All countries
                                    </option>
                                    {countries.map((country) => (
                                        <option
                                            key={country.id}
                                            value={country.id}
                                            className="text-sm py-3 hover:bg-rose-100"
                                        >
                                            {country.country_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Date */}
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                >
                                    Pick a date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={values.date}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-rose-500 focus:border-rose-500"
                                    required
                                ></input>
                            </div>
                            {/* Time */}
                            <div className="mb-5">
                                <label
                                    htmlFor="time"
                                    className="block text-gray-700 text-sm font-bold mb-3"
                                >
                                    Pick a time
                                </label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={values.time}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-rose-500 focus:border-rose-500"
                                    required
                                ></input>
                            </div>
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token}
                            />
                            <button
                                type="submit"
                                className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white"
                            >
                                Edit
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default EditMeetup;
