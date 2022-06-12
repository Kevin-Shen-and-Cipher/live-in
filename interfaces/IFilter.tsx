export interface OptionProps {
    label: string,
    value: string
};

export interface FilterProps {
    values: string[],
    setValues: React.Dispatch<React.SetStateAction<string[]>>
};