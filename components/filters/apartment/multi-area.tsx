import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const areas: OptionProps[] = [
    {
        label: "10坪以下",
        value: "0_10"
    },
    {
        label: "10-20坪",
        value: "10_20"
    },
    {
        label: "20-30坪",
        value: "20_30"
    },
    {
        label: "30-40坪",
        value: "30_40"
    },
    {
        label: "40-50坪",
        value: "40_50"
    },
    {
        label: "50坪以上",
        value: "50_"
    },
];

const MultiArea = ({ values, setValues }: FilterProps) => {
    const listItems = areas.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="multi_area" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">坪數</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {values.toString()}
        </div>
    );
};

export default MultiArea;