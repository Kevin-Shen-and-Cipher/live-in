import React, { useState } from "react";
import { CheckBoxList } from "../form/check-box-list";
import { OptionProps } from "../../../interfaces/IFilter";
import citys from './citys.json';

const District = (props: {
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}) => {
    const { values, setValues } = props;

    const [city, setCity] = useState<number>(-1);
    const [options, setOptions] = useState<OptionProps[]>([]);

    const handleChangeCity = (value: string): void => {
        let newCity = Number.parseInt(value);

        if (newCity >= 0 && newCity < citys.length) {
            setCity(newCity);
            setValues([]);
            setOptions(citys[newCity].districts);
        }
    };

    return (
        <div className="mt-4 font-medium">
            <CitySelect
                city={city}
                handleChangeCity={handleChangeCity}
            />
            <CheckBoxList
                options={options}
                values={values}
                setValues={setValues}
            />
        </div>
    );
};

const CitySelect = (props: {
    city: number,
    handleChangeCity: (value: string) => void
}) => {
    const { city, handleChangeCity } = props;

    return (
        <div>
            <label htmlFor="district">
                搜尋地區
            </label>

            <select
                id="district"
                name="district"
                value={city}
                onChange={e => handleChangeCity(e.target.value)}
            >
                <option disabled value="-1">請選擇縣市</option>
                <CityOptions />
            </select>
        </div>
    );
};

const CityOptions = () => {
    return (
        <>
            {
                citys.map((city, index: number) =>
                    <option
                        key={city.name + index}
                        value={index}
                    >
                        {city.name}
                    </option>
                )
            }
        </>
    );
};

export default District;