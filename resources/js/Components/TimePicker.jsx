const TimePicker = () => {
    return (
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
                className="block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-rose-500 focus:border-rose-500"
                required
            ></input>
        </div>
    );
};

export default TimePicker;
