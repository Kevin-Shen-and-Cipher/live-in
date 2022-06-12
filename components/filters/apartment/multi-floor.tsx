import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const floors: OptionProps[] = [
    {
        label: "1層",
        value: "0_1"
    },
    {
        label: "2-6層",
        value: "2_6"
    },
    {
        label: "6-12層",
        value: "6_12"
    },
    {
        label: "12層以上",
        value: "12_"
    },
];

const MultiFloor = ({ values, setValues }: FilterProps) => {
    const listItems = floors.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="multi_floor" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">格局</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {values.toString()}
        </div>
    );
};

export default MultiFloor;