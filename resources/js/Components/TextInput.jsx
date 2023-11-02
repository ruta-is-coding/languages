const TextInput = ({ label, id, placeholder, name }) => {
    return (
        <div className="mb-5">
            <label
                className="block text-gray-700 text-base font-bold mb-3"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="appearance-none border border-rose-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:ring-rose-500 focus:border-rose-500"
                id={id}
                type="text"
                name={name}
                placeholder={placeholder}
            ></input>
        </div>
    );
};

export default TextInput;
