const DatePicker = () => {
    return (
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
                className="block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-rose-500 focus:border-rose-500"
            ></input>
        </div>
    );
};

export default DatePicker;
