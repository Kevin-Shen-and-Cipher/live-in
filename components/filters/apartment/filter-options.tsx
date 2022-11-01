import { OptionProps, PriceOptionProps, PriceProps } from "../../../interfaces/IFilter";


export const defaultPrice: PriceProps = {
    minPrice: -1,
    maxPrice: -1,
};

export const prices: PriceOptionProps[] = [
    {
        label: "全部",
        value: defaultPrice
    },
    {
        label: "0 ~ 5000",
        value: {
            minPrice: 0,
            maxPrice: 5000
        }
    },
    {
        label: "5000 ~ 10000",
        value: {
            minPrice: 5000,
            maxPrice: 10000
        }
    },
    {
        label: "10000 ~ 20000",
        value: {
            minPrice: 10000,
            maxPrice: 20000
        }
    },
    {
        label: "20000 ~ 30000",
        value: {
            minPrice: 20000,
            maxPrice: 30000
        }
    },
    {
        label: "30000 ~ 40000",
        value: {
            minPrice: 30000,
            maxPrice: 40000
        }
    },
    {
        label: "40000以上",
        value: {
            minPrice: 40000,
            maxPrice: Number.MAX_VALUE
        }
    },
];

export const rentTypes: OptionProps[] = [
    {
        label: "整層住家",
        value: 1,
    },
    {
        label: "獨立套房",
        value: 2,
    },
    {
        label: "分租套房",
        value: 3,
    },
    {
        label: "雅房",
        value: 4,
    }
];

export const apartmentTypes: OptionProps[] = [
    {
        label: "公寓",
        value: 1,
    },
    {
        label: "電梯大樓",
        value: 2,
    },
    {
        label: "透天厝",
        value: 3,
    },
    {
        label: "別墅",
        value: 4,
    }
];

export const roomTypes: OptionProps[] = [
    {
        label: "1房",
        value: 1
    },
    {
        label: "2房",
        value: 2
    },
    {
        label: "3房",
        value: 3
    },
    {
        label: "4房以上",
        value: 4
    },
];

export const devices: OptionProps[] = [
    {
        label: "冷氣",
        value: 1
    },
    {
        label: "洗衣機",
        value: 2
    },
    {
        label: "冰箱",
        value: 3
    },
    {
        label: "熱水器",
        value: 4
    },
    {
        label: "天然瓦斯",
        value: 5
    },
    {
        label: "網路",
        value: 6
    },
    {
        label: "床",
        value: 7
    }
];

export const restricts: OptionProps[] = [
    {
        label: "男女皆可",
        value: 1
    },
    {
        label: "限男生",
        value: 2
    },
    {
        label: "限女生",
        value: 3
    },
    {
        label: "排除頂樓加蓋",
        value: 4
    }
];