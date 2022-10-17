import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const prices: OptionProps[] = [
    {
        label: "0~5000",
        value: "5000"
    },
    {
        label: "5000~10000",
        value: "10000"
    },
    {
        label: "10000~20000",
        value: "20000"
    },
    {
        label: "20000~30000",
        value: "30000"
    },
    {
        label: "30000~40000",
        value: "40000"
    },
    {
        label: "40000以上",
        value: "1000000"
    },
];

const MultiPrice = ({ values, setValues }: FilterProps) => {
    const listItems = prices.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="multi_price" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">租金</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
        </div>
    );
};

export default MultiPrice;