import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../form/check-box-list";

const workingHourOptions: OptionProps[] = [
    {
        label: "日班",
        value: "日班"
    },
    {
        label: "晚班",
        value: "晚班"
    },
    {
        label: "大夜班",
        value: "大夜班"
    },
    {
        label: "假日班",
        value: "假日班"
    },
    {
        label: "輪班",
        value: "輪班"
    },
    {
        label: "不須輪班",
        value: "不須輪班"
    },
];

const WorkingHour = ({ values, setValues }: FilterProps) => {
    const listItems = workingHourOptions.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="working-hour" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">工作時段</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
        </div>
    );
};


export default WorkingHour;