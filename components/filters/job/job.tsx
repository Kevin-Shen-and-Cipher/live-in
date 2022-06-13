import { useState } from "react";
import { CardProps } from "../../../interfaces/ICard";
import PrimaryButton from "../../primary-button";
import Location from "../location";
import Region from "../region";
import JobTenure from "./job-tenure";
import Salary from "./salary";
import JobSearch from "./job-search";
import WorkingHour from "./working-hour";

const JobFilter = ({ setCards, setIsReady }: { setCards: React.Dispatch<React.SetStateAction<CardProps[]>>, setIsReady: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [location, setLocation] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [region, setRegion] = useState<string[]>([]);
    const [salary, setSalary] = useState<string>("1");
    const [tenure, setTenure] = useState<string[]>([]);
    const [workingHour, setWorkingHour] = useState<string[]>([]);

    const search = (): void => {
        if (location !== "" && region.length !== 0) {
            setIsReady(false);
            fetch(process.env.NEXT_PUBLIC_JOB_API_URL as string, {
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
                setIsReady(true);
            })
        }
    };

    const clear = (): void => {
        setRegion([]);
        setSalary("1");
        setTenure([]);
        setWorkingHour([]);
    };

    return (
        <div className="p-6 space-y-5 overflow-y-auto bg-white rounded-sm max-h-64 md:max-h-screen">
            <Location label="目前居住地址" location={location} setLocation={setLocation} />
            <div className="flex justify-end space-x-3">
                <PrimaryButton label="清除篩選" handleClick={clear} />
                <PrimaryButton label="搜尋" handleClick={search} />
            </div>
            <hr />
            <JobSearch value={job} setValue={setJob} />
            <Region values={region} setValues={setRegion} />
            <Salary value={salary} setValue={setSalary} />
            <JobTenure values={tenure} setValues={setTenure} />
            <WorkingHour values={workingHour} setValues={setWorkingHour} />
        </div>
    );
};

export default JobFilter;