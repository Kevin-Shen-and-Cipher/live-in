import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const rooms: OptionProps[] = [
    {
        label: "1房",
        value: "1"
    },
    {
        label: "2房",
        value: "2"
    },
    {
        label: "3房",
        value: "3"
    },
    {
        label: "4房以上",
        value: "4"
    },
];

const MultiRoom = ({ values, setValues }: FilterProps) => {
    const listItems = rooms.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="multi_room" values={values} setValues={setValues} />
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

export default MultiRoom;