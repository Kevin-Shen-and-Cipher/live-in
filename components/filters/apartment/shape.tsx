import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const shapes: OptionProps[] = [
    {
        label: "公寓",
        value: "1",
    },
    {
        label: "電梯大樓",
        value: "2",
    },
    {
        label: "透天厝",
        value: "3",
    },
    {
        label: "別墅",
        value: "4",
    }
];

const Shape = ({ values, setValues }: FilterProps) => {
    const listItems = shapes.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="shape" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">型態</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
        </div>
    );
};

export default Shape;