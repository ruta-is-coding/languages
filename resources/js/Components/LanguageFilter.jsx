const LanguageFilter = ({ languages, setSelectedLanguageId }) => {
    return (
        <div className="mb-5 lg:w-1/5 md:w-1/4">
            <label
                className="block text-rose-700 text-base font-bold mb-3"
                htmlFor="languages"
            >
                Select a language
            </label>
            <select
                name="language_id"
                id="languages"
                className="block py-2.5 px-3 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={(e) => {
                    setSelectedLanguageId(e.target.value);
                }}
            >
                <option className="text-sm py-3 hover:bg-rose-100" value="">
                    All languages
                </option>
                {languages.map((language) => (
                    <option
                        key={language.id}
                        value={language.id}
                        className="text-sm py-3 hover:bg-rose-100"
                    >
                        {language.language_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageFilter;
