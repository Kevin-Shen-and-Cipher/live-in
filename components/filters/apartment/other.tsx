import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const others: OptionProps[] = [
    {
        label: "新上架",
        value: "newPost",
    },
    {
        label: "近捷運站",
        value: "near_subway",
    },
    {
        label: "可養寵物",
        value: "pet",
    },
    {
        label: "可開伙",
        value: "cook",
    },
    {
        label: "有車位",
        value: "cartplace",
    },
    {
        label: "有電梯",
        value: "lift",
    },
    {
        label: "有陽台",
        value: "balcony_1",
    },
    {
        label: "可短期租賃",
        value: "lease"
    }
];

const Other = ({ values, setValues }: FilterProps) => {
    const listItems = others.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="other" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">特色</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
        </div>
    );
};

export default Other;