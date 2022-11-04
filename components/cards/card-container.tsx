import React from "react";

const CardContainer = (props: { children: JSX.Element }) => {
    const { children } = props;

    return (
        <div className="w-full min-h-[12rem] bg-white text-gray-800 rounded-sm hover:shadow-md">
            {children}
        </div>
    );
};

export default CardContainer;