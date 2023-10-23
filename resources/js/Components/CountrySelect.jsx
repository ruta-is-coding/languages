const CountrySelect = ({ countries }) => {
    return (
        <div className="mb-5">
            <label
                className="block text-gray-700 text-sm font-bold mb-3"
                htmlFor="countries"
            >
                Select a country:
            </label>
            <select
                id="countries"
                className="block py-2.5 px-3 w-50 text-sm text-rose-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-rose-200 peer"
            >
                <option className="text-sm py-3 text-rose-700 hover:bg-rose-100">
                    All countries
                </option>
                {countries.map((country) => (
                    <option
                        key={country.id}
                        value={country.id}
                        className="text-sm py-3 text-rose-700 hover:bg-rose-100"
                    >
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountrySelect;
