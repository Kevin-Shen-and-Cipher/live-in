import { useState } from "react";
import { CardProps } from "../../../interfaces/ICard";
import PrimaryButton from "../../primary-button";
import Location from "../location";
import Region from "../region";
import JobTenure from "./job-tenure";
import Salary from "./salary";
import Search from "./search";
import WorkingHour from "./working-hour";

const JobFilter = ({ setCards }: { setCards: React.Dispatch<React.SetStateAction<CardProps[]>> }) => {
    const [location, setLocation] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [region, setRegion] = useState<string[]>([]);
    const [salary, setSalary] = useState<string[]>([]);
    const [tenure, setTenure] = useState<string[]>([]);
    const [workingHour, setWorkingHour] = useState<string[]>([]);

    const search = (): void => {
        if (location !== "" && region.length !== 0) {
            fetch("http://125.228.170.229:5000/job", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "area": region,
                    "address": location,
                    "job": job,
                    "salary": salary,
                    "job-tenure": tenure,
                    "working-hour": workingHour
                }),
            }).then((res) => {
                return res.json();
            }).then((res) => {
                setCards(res);
            })
        }
    };

    const clear = (): void => {
        setRegion([]);
        setSalary([]);
        setTenure([]);
        setWorkingHour([]);
    };

    return (
        <div className="p-6 space-y-5 bg-white rounded-sm">
            <Location label="目前居住地址" location={location} setLocation={setLocation} />
            <div className="flex justify-end space-x-3">
                <PrimaryButton label="清除篩選" handleClick={clear} />
                <PrimaryButton label="搜尋" handleClick={search} />
            </div>
            <hr />
            <Search label="工作" value={job} setValue={setJob} />
            <Region values={region} setValues={setRegion} />
            <Salary values={salary} setValues={setSalary} />
            <JobTenure values={tenure} setValues={setTenure} />
            <WorkingHour values={workingHour} setValues={setWorkingHour} />
        </div>
    );
};

export default JobFilter;