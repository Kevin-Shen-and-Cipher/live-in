import PrimaryButton from "../primary-button";

const Navigation = ({ handlePageChange, page }: { handlePageChange: React.MouseEventHandler, page: string }) => {
    return (
        <div className="flex justify-center w-full gap-5 p-3 bg-blue-300">
            <PrimaryButton label="找房子" name="apartment" handleClick={handlePageChange} onClick={page === "apartment"} />
            <PrimaryButton label="找工作" name="job" handleClick={handlePageChange} onClick={page === "job"} />
        </div>
    );
};

export default Navigation;