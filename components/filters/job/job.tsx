import { useState } from "react";
import { JobFilterProps } from "../../../interfaces/IFilter"

const JobFilter = () => {

    const [filterProps, setFilterProps] = useState<JobFilterProps>();
  
    return (
        <div className="h-full p-3 bg-white rounded-sm">
            找工作
        </div>
    );
};


export default JobFilter;