import React from 'react';


const CardDetailList = (props: { title: string, items: { name: string }[] }) => {
    const { title, items } = props;

    const itemList = items?.map((item, index: number) => {
        return (
            <CardDetail
                key={title + index}
                name={item.name}
            />
        );
    });

    return (
        <div className="flex flex-wrap gap-2">
            <span className="py-1 text-sm font-semibold">{title}：</span>
            {itemList}
        </div>
    );
};

const CardDetail = (props: { name: string }) => {
    const { name } = props;

    return (
        <span className="px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-sm select-none hover:text-white hover:bg-primary">
            {name}
        </span>
    );
};

export default CardDetailList;