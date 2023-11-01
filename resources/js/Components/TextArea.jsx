const TextArea = ({ name }) => {
    return (
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
                name={name}
            ></textarea>
        </div>
    );
};

export default TextArea;
