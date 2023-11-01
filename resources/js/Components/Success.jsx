const Success = ({ flash }) => {
    return (
        <div className="flex justify-center">
            <div className="border border-lime-400 rounded bg-lime-200 px-4 py-3 w-full max-w-sm">
                <p className="text-center text-lime-700">{flash.message}</p>
            </div>
        </div>
    );
};

export default Success;
