
const Location = ({ location, setLocation }: { location: string, setLocation: React.Dispatch<React.SetStateAction<string>> }) => {

    const handleChangeLocation = (value: string) => {
        setLocation(value);
    }

    return (
        <div className="">
            <label
                htmlFor="location"
                className="text-lg font-semibold text-gray-800"
            >
                目前工作地址
            </label>
            <input
                value={location}
                onChange={e => handleChangeLocation(e.target.value)}
                type="text"
                name="location"
                id="location"
                className="block w-full px-3 py-2 mt-1 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
        </div>
    );
};

export default Location;