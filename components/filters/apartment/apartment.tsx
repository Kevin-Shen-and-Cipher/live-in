import { useState } from "react";
import PrimaryButton from "../../primary-button";
import Location from "../location";
import MultiArea from "./multi-area";
import MultiFloor from "./multi-floor";
import MultiNotice from "./multi-notice";
import MultiPrice from "./multi-price";
import MultiRoom from "./multi-room";
import Option from "./option";
import Other from "./other";
import Region from "../region";
import RentKind from "./rentKind";
import Shape from "./shape";
import { CardProps } from "../../../interfaces/ICard";

const ApartmentFilter = ({ setCards, setIsReady }: { setCards: React.Dispatch<React.SetStateAction<CardProps[]>>, setIsReady: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [location, setLocation] = useState<string>("");
    const [multiArea, setMultiArea] = useState<string[]>([]);
    const [multiFloor, setMultiFloor] = useState<string[]>([]);
    const [multiNotice, setMultiNotice] = useState<string[]>([]);
    const [multiPrice, setMultiPrice] = useState<string[]>([]);
    const [multiRoom, setMultiRoom] = useState<string[]>([]);
    const [option, setOption] = useState<string[]>([]);
    const [other, setOther] = useState<string[]>([]);
    const [region, setRegion] = useState<string[]>([]);
    const [rentKind, setRentKind] = useState<string[]>([]);
    const [shape, setShape] = useState<string[]>([]);

    const search = (): void => {
        if (location !== "" && region.length !== 0) {
            setIsReady(false);
            fetch(process.env.NEXT_PUBLIC_APARTMENT_API_URL as string, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "area": region,
                    "address": location,
                    "multi-area": multiArea,
                    "multi-floor": multiFloor,
                    "multi-notice": multiNotice,
                    "multi-price": multiPrice,
                    "multi-room": multiRoom,
                    "option": option,
                    "other": other,
                    "rentKind": rentKind,
                    "shape": shape,
                }),
            }).then((res) => {
                return res.json();
            }).then((res) => {
                setCards(res);
                setIsReady(true);
            })
        }
    };

    const clear = (): void => {
        setMultiArea([]);
        setMultiFloor([]);
        setMultiNotice([]);
        setMultiPrice([]);
        setMultiRoom([]);
        setOption([]);
        setOther([]);
        setRegion([]);
        setRentKind([]);
        setShape([]);
    };

    return (
        <div className="p-6 space-y-5 overflow-y-auto bg-white rounded-sm max-h-64 md:max-h-screen">
            <Location label="目前工作地址" location={location} setLocation={setLocation} />
            <div className="flex justify-end space-x-3">
                <PrimaryButton label="清除篩選" handleClick={clear} />
                <PrimaryButton label="搜尋" handleClick={search} />
            </div>
            <hr />
            <Region values={region} setValues={setRegion} />
            <RentKind values={rentKind} setValues={setRentKind} />
            <MultiPrice values={multiPrice} setValues={setMultiPrice} />
            <MultiRoom values={multiRoom} setValues={setMultiRoom} />
            <Other values={other} setValues={setOther} />
            <Shape values={shape} setValues={setShape} />
            <MultiArea values={multiArea} setValues={setMultiArea} />
            <MultiFloor values={multiFloor} setValues={setMultiFloor} />
            <Option values={option} setValues={setOption} />
            <MultiNotice values={multiNotice} setValues={setMultiNotice} />
        </div>
    );
};

export default ApartmentFilter;