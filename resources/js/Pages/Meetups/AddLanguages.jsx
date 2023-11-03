import { Head, router, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Container from "@/Components/Container";
import Success from "@/Components/Success";
import Errors from "@/Components/Error";

const AddLanguages = ({ auth, languages, csrf_token }) => {
    const { flash, errors } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);

    // Display success message
    useEffect(() => {
        if (flash.message) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, "2500");
        }
    }, []);

    // Add checked languages
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        router.post("/meetup/create/add-languages", data);
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add meetup languages" />
            <section>
                <Container>
                    {showMessage && <Success flash={flash} />}
                    <Errors
                        errors={errors}
                        className="animate__animated animate__fadeIn animate__slower"
                    />
                    <div className="flex justify-center">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="roseForm"
                        >
                            <h2>Choose your meetup languages</h2>
                            {languages.map((language) => (
                                <div
                                    className="flex items-center mb-4"
                                    key={language.id}
                                >
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        name="language_id[]"
                                        value={language.id}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {language.language_name}
                                    </label>
                                </div>
                            ))}
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token}
                            />
                            <button className="bg-rose-700 hover:bg-rose-600 md:py-2 py-1 md:px-4 px-2 rounded-lg transition ease-in-out duration-150 text-white font-bold hover:text-white">
                                Add
                            </button>
                        </form>
                    </div>
                </Container>
            </section>
        </AuthenticatedLayout>
    );
};

export default AddLanguages;
