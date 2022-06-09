import PrimaryButton from "../primary-button";

const Navigation = ({ handlePageChange }: { handlePageChange: React.MouseEventHandler }) => {
    return (
        <div className="flex justify-center w-full gap-5 p-3 bg-blue-300">
            <PrimaryButton label="找房子" name="deparment" handleClick={handlePageChange} />
            <PrimaryButton label="找工作" name="job" handleClick={handlePageChange} />
        </div>
    );
};

export default Navigation;