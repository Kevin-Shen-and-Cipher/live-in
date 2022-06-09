import { useState } from "react";
import PrimaryButton from "../../primary-button";
import Location from "../location";
import Region from "../region";
import JobTenure from "./job-tenure";
import Salary from "./salary";
import Search from "./search";
import WorkingHour from "./working-hour";

const JobFilter = () => {
    const [location, setLocation] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [region, setRegion] = useState<string[]>([]);
    const [salary, setSalary] = useState<string[]>([]);
    const [tenure, setTenure] = useState<string[]>([]);
    const [workingHour, setWorkingHour] = useState<string[]>([]);
    const search = () => {
        //api
    };

    const clear = () => {
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