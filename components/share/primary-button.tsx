interface PrimaryButtonProps {
    label: string,
    name?: string,
    onClick?: boolean,
    handleClick: React.MouseEventHandler
};

const PrimaryButton = ({ label, name, onClick = false, handleClick }: PrimaryButtonProps) => {
    return (
        <button
            onClick={handleClick}
            name={name}
            className={`px-4 py-2 transition-all duration-200 ${onClick ? "text-white bg-primary" : "bg-white text-gray-800"}  rounded-sm hover:text-white hover:bg-primary focus:outline-none focus:ring-primary focus:border-primary`}
        >
            <p className="font-semibold text-md">
                {label}
            </p>
        </button>
    );
};

export default PrimaryButton;