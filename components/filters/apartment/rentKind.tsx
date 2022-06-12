import { FilterProps, OptionProps } from "../../../interfaces/IFilter";
import Checkbox from "../../form/checkbox";

const rentKinds: OptionProps[] = [
    {
        label: "整層住家",
        value: "1",
    },
    {
        label: "獨立套房",
        value: "2",
    },
    {
        label: "分租套房",
        value: "3",
    },
    {
        label: "雅房",
        value: "4",
    },
    {
        label: "車位",
        value: "8",
    },
    {
        label: "其他",
        value: "24",
    }
];

const RentKind = ({ values, setValues }: FilterProps) => {
    const listItems = rentKinds.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="rent_kind" values={values} setValues={setValues} />
        );
    });

    return (
        <div className="">
            <label className="text-lg font-semibold text-gray-800">類型</label>
            <div className="flex flex-wrap gap-3 mt-1">
                {listItems}
            </div>
            {values.toString()}
        </div>
    );
};

export default RentKind;