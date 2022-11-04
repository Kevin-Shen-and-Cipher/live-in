import { OptionProps } from "../../../interfaces/IFilter";

const Selector = (props: {
    title?: string,
    options: OptionProps[],
    disabledOption: boolean,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}) => {
    const { title, options, disabledOption, value, setValue } = props;

    const handleChangeValue = (value: string): void => {
        let newValue = Number.parseInt(value);

        if (options.find(o => o.value === newValue)) {
            setValue(newValue);
        }
    };

    return (
        <div>
            {title ? <label htmlFor={title}>{title}</label> : ""}
            <select
                id={title}
                name={title}
                value={value}
                onChange={e => handleChangeValue(e.target.value)}
            >
                {
                    disabledOption ? <option disabled value="">請選擇{title}</option> : ""
                }
                <Options options={options} />
            </select>
        </div>
    );
};

const Options = (props: { options: OptionProps[] }) => {
    const { options } = props;

    return (
        <>
            {
                options.map((option, index: number) =>
                    <option
                        key={option.label + index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                )
            }
        </>
    );
};

export default Selector