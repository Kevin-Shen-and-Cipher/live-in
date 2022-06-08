interface PrimaryButtonProps {
    label: string,
    name?: string,
    handleClick: React.MouseEventHandler
};

const PrimaryButton = ({ label, name, handleClick }: PrimaryButtonProps) => {
    return (
        <button
            onClick={handleClick}
            name={name}
            className="px-4 py-2 text-gray-800 transition-all duration-200 bg-white rounded-sm hover:text-white hover:bg-primary"
        >
            <p className="font-semibold text-md">
                {label}
            </p>
        </button>
    );
};

export default PrimaryButton;