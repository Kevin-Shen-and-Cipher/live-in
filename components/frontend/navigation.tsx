import { Dispatch, SetStateAction } from "react";
import PrimaryButton from "../share/primary-button";

const Navigation = (props: { setPage: Dispatch<SetStateAction<string>>, page: string }) => {
    const { setPage, page } = props;

    const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === "job") {
            setPage("job");
        } else {
            setPage("apartment");
        }
    };

    return (
        <div className="flex justify-center w-full gap-5 p-3 bg-blue-300">
            <PrimaryButton label="找房子" name="apartment" handleClick={handlePageChange} onClick={page === "apartment"} />
            <PrimaryButton label="找工作" name="job" handleClick={handlePageChange} onClick={page === "job"} />
        </div>
    );
};

export default Navigation;