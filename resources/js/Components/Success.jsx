const Success = ({ flash }) => {
    return (
        <div className="flex justify-center animate__animated animate__fadeIn mb-5">
            <div className="border border-lime-400 rounded bg-lime-200 px-4 py-3 w-full max-w-md">
                <p className="text-center text-lime-700">{flash.message}</p>
            </div>
        </div>
    );
};

export default Success;
