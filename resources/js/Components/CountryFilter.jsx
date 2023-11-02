const CountryFilter = ({ countries, setSelectedCountryId }) => {
    return (
        <div className="mb-5 lg:w-1/5 md:w-1/4">
            <label
                className="block text-rose-700 text-base font-bold mb-3"
                htmlFor="countries"
            >
                Select a country
            </label>
            <select
                name="country_id"
                id="countries"
                className="block py-2.5 px-3 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => {
                    setSelectedCountryId(e.target.value);
                }}
            >
                <option className="text-sm py-3 hover:bg-rose-100" value="">
                    All countries
                </option>
                {countries.map((country) => (
                    <option
                        key={country.id}
                        value={country.id}
                        className="text-sm py-3 hover:bg-rose-100"
                    >
                        {country.country_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryFilter;
