import { ChangeEvent, useEffect, useState } from "react";

interface CheckboxProps {
    label: string,
    value: string,
    name: string,
    values: string[],
    setValues: React.Dispatch<React.SetStateAction<string[]>>
}

const Checkbox = ({ label, value, name, values, setValues }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked;

        if (isChecked) {
            setValues([...values, e.currentTarget.value]);
        } else {
            setValues(values.filter(item => item !== e.currentTarget.value));
        }
    }

    useEffect(() => {
        setChecked(values.some(item => item === String(value)));
    }, [value, values]);

    return (
        <label
            htmlFor={name + "-" + label}
            className="inline-flex items-center cursor-pointer select-none group"
        >
            <input
                id={name + "-" + label}
                name={name}
                value={value}
                checked={checked}
                onChange={handleChangeValue}
                type="checkbox"
                className="w-5 h-5 ml-1 border-0 rounded accent-primary"
            />
            <span className="ml-2 text-sm font-semibold text-gray-600 transition-all group-hover:text-primary ">
                {label}
            </span>
        </label>
    );
};

export default Checkbox;