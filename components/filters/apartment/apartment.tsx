import { useState } from "react";
import { ApartmentCardProps, JobCardProps } from "../../../interfaces/ICard";
import { PriceProps } from "../../../interfaces/IFilter";
import { CheckBoxList } from "../form/check-box-list";
import { apartmentTypes, defaultPrice, devices, rentTypes, restricts, roomTypes } from "./filter-options";

import PrimaryButton from "../../share/primary-button";
import Address from "../share/address";
import Price from "./price";
import District from "../share/district";
import FilterContainer from "../../share/filter-container";

const ApartmentFilter = (props: {
    handleSearchResult: (cards: ApartmentCardProps[] | JobCardProps[]) => void,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const { handleSearchResult, setIsLoading } = props;

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
            setIsLoading(false);
            fetch(getUrl())
                .then((response) => {
                    return response.json();
                }).then((result: ApartmentCardProps[]) => {
                    handleSearchResult(result);
                    setIsLoading(true);
                }).catch((error) => {
                    console.log(error);
                    setIsLoading(true);
                });
        }
    };

    const getUrl = () => {
        const { maxPrice, minPrice } = price;
        let searchParams = new URLSearchParams();

        searchParams.append("address", address);
        district.forEach(d => searchParams.append("district", d.toString()));
        restrict.forEach(d => searchParams.append("restrict", d.toString()));
        roomType.forEach(d => searchParams.append("room_type", d.toString()));
        device.forEach(d => searchParams.append("device", d.toString()));
        rentType.forEach(d => searchParams.append("rent_type", d.toString()));
        apartmentType.forEach(d => searchParams.append("apartment_type", d.toString()));
        if (maxPrice !== -1 && minPrice !== -1) {
            searchParams.append("max_price", maxPrice.toString());
            searchParams.append("min_price", minPrice.toString());
        }

        return apiUrl + '?' + searchParams.toString();
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