import { CardProps } from "../../interfaces/ICard";

const Card = (props: CardProps) => {
    return (
        <a target="_blank" rel="noreferrer" href={props.url} title={props.title}>
            <div className="w-full h-48 p-6 mb-5 transition-all duration-300 bg-white rounded-sm hover:shadow-md group hover:ml-6">
                <h3 className="text-2xl font-semibold text-gray-600 group-hover:text-primary">
                    {props.title}
                </h3>
            </div>
        </a>
    );
};

export default Card;