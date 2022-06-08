import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const options: OptionProps[] = [
    {
        label: "冷氣",
        value: "cold"
    },
    {
        label: "洗衣機",
        value: "washer"
    },
    {
        label: "冰箱",
        value: "icebox"
    },
    {
        label: "熱水器",
        value: "hotwater"
    },
    {
        label: "天然瓦斯",
        value: "naturalgas"
    },
    {
        label: "網路",
        value: "broadband"
    },
    {
        label: "床",
        value: "bed"
    }
];

const Option = ({ values, setValues }: FilterProps) => {
    const listItems = options.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="option" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">設備</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {values.toString()}
        </div>
    );
};

export default Option;