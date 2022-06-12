interface SearchProps {
    label: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ label, value, setValue }: SearchProps) => {

    const handleChangeLocation = (value: string) => {
        setValue(value);
    }

    return (
        <div className="">
            <label
                htmlFor="location"
                className="text-lg font-semibold text-gray-800"
            >
                {label}
            </label>
            <input
                value={value}
                onChange={e => handleChangeLocation(e.target.value)}
                type="text"
                name="search"
                id="search"
                className="block w-full px-3 py-2 mt-1 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
        </div>
    );
};

export default Search;