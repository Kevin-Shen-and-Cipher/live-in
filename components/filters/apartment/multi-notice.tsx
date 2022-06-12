import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const notices: OptionProps[] = [
    {
        label: "男女皆可",
        value: "all_sex"
    },
    {
        label: "限男生",
        value: "boy"
    },
    {
        label: "限女生",
        value: "girl"
    },
    {
        label: "排除頂樓加蓋",
        value: "not_cover"
    }
];

const MultiNotice = ({ values, setValues }: FilterProps) => {
    const listItems = notices.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="multi_notice" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">須知</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {values.toString()}
        </div>
    );
};

export default MultiNotice;