import React from "react";
import { OptionProps } from "../../../interfaces/IFilter";

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

interface SalaryProps {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Salary = ({ value, setValue }: SalaryProps) => {

    const handleChangeSalary = (event: React.FormEvent<HTMLSelectElement>): void => {
        setValue(event.currentTarget.value);
    };

    return (
        <div className="flex flex-col justify-center font-medium">
            <label className="text-lg font-semibold text-gray-800">薪資待遇</label>
            <select
                name="key"
                value={value}
                onChange={handleChangeSalary}
                className="block px-3 py-2 mt-1 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            >
                <SalaryItems />
            </select>
            {/* <CumstomSalary values={values} setValues={setValues} /> */}
        </div>
    );
};

const SalaryItems = () => {
    const listItems = salaryOptions.map((item: OptionProps) =>
        <option
            key={item.label}
            value={item.value}
            className="font-semibold text-gray-600"
        >
            {item.label}
        </option>
    );
    return (
        <>
            {listItems}
        </>
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