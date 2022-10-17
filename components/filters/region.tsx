import React, { useState } from "react";
import Checkbox from "../form/checkbox";
import { FilterProps, OptionProps } from "../../interfaces/IFilter";

const data = require('./region_children.json');

const Region = ({ values, setValues }: FilterProps) => {
    const [city, setCity] = useState<string>("");
    const [regions, setRegions] = useState<OptionProps[]>([]);

    const handleChangeCity = (event: React.FormEvent<HTMLSelectElement>): void => {
        setCity(event.currentTarget.value);
        setValues([]);
        if (event.currentTarget.value !== "") {
            const newOptions: OptionProps[] = (Object.entries(data).find((element) => element[0] === event.currentTarget.value) as [string, OptionProps[]])[1];
            setRegions(newOptions);
        }
    };

    return (
        <div className="flex flex-col justify-center font-medium">
            <label
                htmlFor="region-key"
                className="text-lg font-semibold text-gray-800"
            >
                位置
            </label>
            <select
                name="region-key"
                value={city}
                onChange={handleChangeCity}
                className="block px-3 py-2 mt-1 font-semibold text-gray-600 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            >
                <option disabled value="">請選擇地區</option>
                <CityItems />
            </select>

            <div className="flex flex-wrap gap-3 mt-4">
                <RegionItems regions={regions} values={values} setValues={setValues} />
            </div>
        </div>
    );
};

const CityItems = () => {
    const listItems = Object.keys(data).map((item) =>
        <option
            key={item}
            value={item}
            className="font-semibold text-gray-600"
        >
            {item}
        </option>
    );
    return (
        <>
            {listItems}
        </>
    );
};

interface RegionItemProps extends FilterProps {
    regions: OptionProps[],
};

const RegionItems = ({ regions, values, setValues }: RegionItemProps) => {
    const listItems = regions.map((item: OptionProps) => {
        return (
            <Checkbox key={item.label} label={item.label} value={item.value} name="region" values={values} setValues={setValues} />
        );
    });

    return (
        <>
            {listItems}
        </>
    );
};

export default Region;