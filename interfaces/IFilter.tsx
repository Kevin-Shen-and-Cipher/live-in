export interface OptionProps {
    label: string,
    value: number
};

export interface FilterProps {
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
};

export interface PriceProps {
    maxPrice: number,
    minPrice: number
};

export interface PriceOptionProps {
    label: string,
    value: PriceProps
};

export interface PriceFilterProps {
    value: PriceProps,
    setValue: React.Dispatch<React.SetStateAction<PriceProps>>
};