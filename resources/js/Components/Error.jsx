const Errors = ({ errors }) => {
    return (
        <>
            {JSON.stringify(errors) != "{}" && (
                <div className="flex justify-center mb-5">
                    <div className="border border-red-400 rounded bg-red-100 px-4 py-3 w-full max-w-md">
                        {Object.keys(errors).map((key, index) => (
                            <p key={index} className="text-center text-red-700">
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
