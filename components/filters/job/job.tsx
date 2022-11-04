import { useState } from "react";
import { ApartmentCardProps, JobCardProps } from "../../../interfaces/ICard";
import { CheckBoxList } from "../form/check-box-list";
import { jobPositions, salarys, workingHours } from "./filter-options";

import Selector from "../form/selector";
import FilterContainer from "../share/filter-container";
import PrimaryButton from "../../share/primary-button";
import Address from "../share/address";
import District from "../share/district";


const JobFilter = (props: {
    handleSearchResult: (cards: ApartmentCardProps[] | JobCardProps[]) => void,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const { handleSearchResult, setIsLoading } = props;

    const [address, setAddress] = useState<string>("");
    const [district, setDistrict] = useState<number[]>([]);
    const [jobPosition, setJobPosition] = useState<number[]>([]);
    const [minSalary, setMinSalary] = useState<number>(0);
    const [workingHour, setWorkingHour] = useState<number[]>([]);

    const apiUrl: string = process.env.NEXT_PUBLIC_JOB_API_URL as string;

    const search = (): void => {
        if (address && district.length) {
            setIsLoading(false);
            fetch(getUrl())
                .then((response) => {
                    return response.json();
                }).then((result: JobCardProps[]) => {
                    handleSearchResult(result);
                    setIsLoading(true);
                }).catch((error) => {
                    console.log(error);
                    setIsLoading(true);
                });
        }
    };

    const getUrl = () => {
        let searchParams = new URLSearchParams();

        searchParams.append("address", address);
        district.forEach(d => searchParams.append("district", d.toString()));
        jobPosition.forEach(d => searchParams.append("job_position", d.toString()));
        workingHour.forEach(d => searchParams.append("working_hour", d.toString()));
        searchParams.append("min_salary", minSalary.toString());

        return apiUrl + '?' + searchParams.toString();
    };

    const clear = (): void => {
        setDistrict([]);
        setJobPosition([]);
        setMinSalary(0);
        setWorkingHour([]);
    };

    return (
        <FilterContainer>
            <>
                <Address
                    label="目前居住地址"
                    address={address}
                    setAddress={setAddress}
                />
                <District values={district} setValues={setDistrict} />
                <div className="flex justify-end space-x-3">
                    <PrimaryButton label="清除篩選" handleClick={clear} />
                    <PrimaryButton label="搜尋" handleClick={search} />
                </div>
                <hr />
                <CheckBoxList
                    title="職位"
                    options={jobPositions}
                    values={jobPosition}
                    setValues={setJobPosition}
                />
                <Selector
                    title="最低薪資"
                    options={salarys}
                    disabledOption={false}
                    value={minSalary}
                    setValue={setMinSalary}
                />
                <CheckBoxList
                    title="工作時段"
                    options={workingHours}
                    values={workingHour}
                    setValues={setWorkingHour}
                />
            </>
        </FilterContainer>
    );
};

export default JobFilter;