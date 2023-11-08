const Success = ({ flash }) => {
    return (
        <div className="flex justify-center animate__animated animate__fadeIn mb-5">
            <div
                className="border rounded px-4 py-3 w-full max-w-md"
                style={{
                    background: "#D6FF75",
                    borderColor: "#abcc5e",
                }}
            >
                <p
                    className="text-center"
                    style={{
                        color: "#6b803b",
                    }}
                >
                    {flash.message}
                </p>
            </div>
        </div>
    );
};

export default Success;
