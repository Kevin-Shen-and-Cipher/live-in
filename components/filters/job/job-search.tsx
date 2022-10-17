interface JobSearchProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const JobSearch = ({ value, setValue }: JobSearchProps) => {

    const handleChangeLocation = (value: string) => {
        setValue(value);
    }

    return (
        <div className="">
            <label
                htmlFor="job-search"
                className="text-lg font-semibold text-gray-800"
            >
                工作
            </label>
            <input
                value={value}
                onChange={e => handleChangeLocation(e.target.value)}
                type="text"
                name="job-search"
                id="job-search"
                className="block w-full px-3 py-2 mt-1 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
        </div>
    );
};

export default JobSearch;