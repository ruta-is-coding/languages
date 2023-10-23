const TextInput = ({ label, id, placeholder }) => {
    return (
        <div className="mb-5">
            <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500"
                id={id}
                type="text"
                placeholder={placeholder}
                required
            ></input>
        </div>
    );
};

export default TextInput;
