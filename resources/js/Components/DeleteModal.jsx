import { router } from "@inertiajs/react";
const DeleteModal = ({ deleteId, csrf_token, setShowModal }) => {
    function handleDelete(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setShowModal(false);
        router.delete(`/my-meetups/delete/${deleteId}`, data);
    }
    return (
        <div
            id="popup-modal"
            tabIndex="-1"
            className="fixed left-1/2 transform z-50 p-5 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] w-full max-w-md max-h-full"
            style={{
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg border-2 pt-7">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                        data-modal-hide="popup-modal"
                        onClick={() => setShowModal(false)}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this meetup?
                        </h3>
                        <div className="flex gap-3 justify-center">
                            <form onSubmit={handleDelete}>
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                />
                                <button
                                    data-modal-hide="popup-modal"
                                    className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-3 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                >
                                    Yes, I'm sure
                                </button>
                            </form>
                            <button
                                data-modal-hide="popup-modal"
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                onClick={() => setShowModal(false)}
                            >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
