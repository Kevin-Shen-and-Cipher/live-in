import { useEffect, useState } from "react";
import { OptionProps } from "../../../interfaces/IFilter";

export const CheckBoxList = (props: {
    title?: string,
    options: OptionProps[],
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}) => {
    const { title, options, values, setValues } = props;

    const optionItems = options
        .map((option: OptionProps, index: Number) =>
            <CheckBox
                key={option.label + index}
                option={option}
                values={values}
                setValues={setValues}
            />
        );

    return (
        <div className="mt-4">
            {title ? <label>{title}</label> : ""}
            <div className="flex flex-wrap gap-3 mt-1">
                {optionItems}
            </div>
        </div>
    );
};


export const CheckBox = (props: {
    option: OptionProps,
    values: number[],
    setValues: React.Dispatch<React.SetStateAction<number[]>>
}) => {
    const { option, values, setValues } = props;
    const [checked, setChecked] = useState(false);

    const handleChangeValue = (checked: boolean) => {
        if (checked) {
            setValues([...values, option.value]);
        } else {
            setValues(values.filter(item => item !== option.value));
        }
    }

    useEffect(() => {
        setChecked(values.some(item => item === option.value));
    }, [option.value, values]);

    return (
        <label
            htmlFor={option.label}
            className="inline-flex items-center cursor-pointer select-none group"
        >
            <input
                id={option.label}
                name={option.label}
                value={option.value}
                checked={checked}
                onChange={e => handleChangeValue(e.target.checked)}
                type="checkbox"
                className="w-5 h-5 ml-1 border-0 rounded accent-primary focus:outline-none"
            />
            <span className="ml-2 text-sm font-semibold text-gray-600 transition-all group-hover:text-primary">
                {option.label}
            </span>
        </label>
    );
};