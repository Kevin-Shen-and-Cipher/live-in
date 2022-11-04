const Address = (props: {
    label: string,
    address: string,
    setAddress: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { label, address, setAddress } = props;

    const handleChangeAddress = (value: string) => {
        setAddress(value);
    }

    return (
        <div className="">
            <label htmlFor="address">
                {label}
            </label>
            <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={e => handleChangeAddress(e.target.value)}
            />
        </div>
    );
};

export default Address;