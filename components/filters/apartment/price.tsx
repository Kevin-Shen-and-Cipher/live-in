import React from "react";
import { PriceFilterProps, PriceOptionProps, PriceProps } from "../../../interfaces/IFilter";
import { prices } from "./filter-options";


const Price = ({ value, setValue }: PriceFilterProps) => {
    const handleChangeValue = (event: React.FormEvent<HTMLSelectElement>): void => {
        let index = Number.parseInt(event.currentTarget.value);

        if (index >= 0 && index < prices.length) {
            let price: PriceProps = prices.at(index)?.value as PriceProps;
            setValue(price)
        }
    };

    return (
        <div className="mt-4">
            <label htmlFor="price">租金</label>
            <select
                id="price"
                name="price"
                value={prices.findIndex(p => p.value === value)}
                onChange={handleChangeValue}
            >
                <PriceOptions />
            </select>
        </div>
    );
};

const PriceOptions = () => {
    const priceOptions = prices.map((item: PriceOptionProps, index: number) =>
        <option key={item.label} value={index}>
            {item.label}
        </option>
    );

    return (
        <>
            {
                priceOptions
            }
        </>
    );
};

export default Price;