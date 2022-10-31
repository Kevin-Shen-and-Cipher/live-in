import { useState } from "react";
import { CardProps } from "../../../interfaces/ICard";
import { PriceProps } from "../../../interfaces/IFilter";
import { CheckBoxList } from "../form/check-box-list";
import { apartmentTypes, defaultPrice, devices, rentTypes, restricts, roomTypes } from "./filter-options";

import PrimaryButton from "../../share/primary-button";
import Address from "../share/address";
import Price from "./price";
import District from "../share/district";
import FilterContainer from "../../share/filter-container"

const ApartmentFilter = (props: {
    setCards: React.Dispatch<React.SetStateAction<CardProps[]>>,
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const { setCards, setIsReady } = props;

    const [address, setAddress] = useState<string>("");
    const [restrict, setRestrict] = useState<number[]>([]);
    const [price, setPrice] = useState<PriceProps>(defaultPrice);
    const [roomType, setRoomType] = useState<number[]>([]);
    const [device, setDevice] = useState<number[]>([]);
    const [district, setDistrict] = useState<number[]>([]);
    const [rentType, setRentType] = useState<number[]>([]);
    const [apartmentType, setApartmentType] = useState<number[]>([]);
    const apiUrl: string = process.env.NEXT_PUBLIC_APARTMENT_API_URL as string;

    const search = (): void => {
        if (address && district.length) {
            setIsReady(false);
            fetch(getUrl(), {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((result) => {
                setCards(result);
                setIsReady(true);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    const getUrl = () => {
        const { maxPrice, minPrice } = price;
        const data = JSON.stringify({
            address,
            district,
            restrict,
            roomType,
            device,
            rentType,
            apartmentType,
            maxPrice,
            minPrice
        });

        return apiUrl + '?' + new URLSearchParams(data);
    };

    const clear = (): void => {
        setRestrict([]);
        setPrice(defaultPrice);
        setRoomType([]);
        setDevice([]);
        setDistrict([]);
        setRentType([]);
        setApartmentType([]);
    };

    return (
        <FilterContainer>
            <>
                <Address
                    label="目前工作地址"
                    address={address}
                    setAddress={setAddress}
                />
                <District values={district} setValues={setDistrict} />
                <div className="flex justify-end space-x-3">
                    <PrimaryButton label="清除篩選" handleClick={clear} />
                    <PrimaryButton label="搜尋" handleClick={search} />
                </div>
                <hr />
                <Price value={price} setValue={setPrice} />
                <CheckBoxList
                    title="租賃類型"
                    options={rentTypes}
                    values={rentType}
                    setValues={setRentType}
                />
                <CheckBoxList
                    title="房子類型"
                    options={apartmentTypes}
                    values={apartmentType}
                    setValues={setApartmentType}
                />
                <CheckBoxList
                    title="格局"
                    options={roomTypes}
                    values={roomType}
                    setValues={setRoomType}
                />
                <CheckBoxList
                    title="設備"
                    options={devices}
                    values={device}
                    setValues={setDevice}
                />
                <CheckBoxList
                    title="限制"
                    options={restricts}
                    values={restrict}
                    setValues={setRestrict}
                />
            </>
        </FilterContainer>
    );
};

export default ApartmentFilter;