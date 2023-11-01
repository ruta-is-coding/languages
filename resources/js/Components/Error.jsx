const Errors = ({ errors }) => {
    return (
        <>
            {JSON.stringify(errors) != "{}" && (
                <div className="flex justify-center">
                    <div className="border border-red-400 rounded bg-red-100 px-4 py-2 text-red-700 w-full max-w-sm mb-5">
                        {Object.keys(errors).map((key, index) => (
                            <p key={index} className="text-sm md:text-base">
                                {errors[key]}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Errors;
