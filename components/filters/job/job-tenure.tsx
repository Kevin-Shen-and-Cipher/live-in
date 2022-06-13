import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const tenurOptions: OptionProps[] = [
    {
        label: "1年以下",
        value: "0"
    },
    {
        label: "1-3年",
        value: "1"
    },
    {
        label: "3-5年",
        value: "3"
    },
    {
        label: "5-10年",
        value: "5"
    },
    {
        label: "10年以上",
        value: "10"
    },
];

const JobTenure = ({ values, setValues }: FilterProps) => {
    const listItems = tenurOptions.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="salary" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">工作年資</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
        </div>
    );
};


export default JobTenure;