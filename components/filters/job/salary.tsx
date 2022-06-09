import React, { useState } from "react";
import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const salaryOptions: OptionProps[] = [
    {
        label: "有寫薪資",
        value: "1"
    },
    {
        label: "月薪3萬up",
        value: "2"
    },
    {
        label: "月薪4萬up",
        value: "3"
    },
    {
        label: "月薪5萬up",
        value: "4"
    },
];

const Salary = ({ values, setValues }: FilterProps) => {
    const listItems = salaryOptions.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="salary" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">薪資待遇</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {/* <CumstomSalary values={values} setValues={setValues} /> */}
            {values.toString()}
        </div>
    );
};

// const CumstomSalary = ({ values, setValues }: FilterProps) => {
//     const [minimum, setMinimum] = useState("0");
//     const [maximum, setMaxmium] = useState("0");

//     const handleChangeMinimum = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setMinimum(e.currentTarget.value);
//     };

//     const handleChangeMaximum = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setMaxmium(e.currentTarget.value);
//     };

//     return (
//         <div className="mt-2">
//             <label className="text-lg font-semibold text-gray-800">自訂薪資</label>
//             <input
//                 value={minimum}
//                 onChange={e => handleChangeMinimum(e)}
//                 type="number"
//                 name="minimum"
//                 id="minimum"
//                 className="block w-full px-3 py-2 mt-2 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             />
//             {minimum}
//             <input
//                 value={maximum}
//                 onChange={e => handleChangeMaximum(e)}
//                 type="number"
//                 name="maximum"
//                 id="maximum"
//                 className="block w-full px-3 py-2 mt-2 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             />
//             {maximum}
//         </div>
//     );
// };

export default Salary;