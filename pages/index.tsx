import { CardProps } from '../interfaces/ICard';
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ApartmentFilter from '../components/filters/apartment/apartment';
import JobFilter from '../components/filters/job/job';
import List from '../components/cards/list';
import Navigation from '../components/frontend/navigation';
import { Ring } from '@uiball/loaders';

const Home: NextPage = () => {
    const [page, setPage] = useState<string>("apartment");
    const [cards, setCards] = useState<CardProps[]>([]);
    const [isReady, setIsReady] = useState<boolean>(true);

    useEffect(() => {
        setCards([]);
    }, [page]);

    return (
        <>
            <Navigation setPage={setPage} page={page} />
            <div className="flex justify-center mx-4 my-16 md:mx-8">
                <div className="w-full max-w-screen-lg">
                    <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                        <div className="col-span-12 md:col-span-4">
                            <SideBar
                                page={page}
                                setCards={setCards}
                                setIsReady={setIsReady}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <CardList
                                isReady={isReady}
                                cards={cards}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const SideBar = (props: {
    page: string,
    setCards: Dispatch<SetStateAction<CardProps[]>>,
    setIsReady: Dispatch<SetStateAction<boolean>>
}) => {
    const { page, setCards, setIsReady } = props;

    return (
        <>
            {
                page === "apartment" ?
                    <ApartmentFilter setCards={setCards} setIsReady={setIsReady} /> :
                    <JobFilter setCards={setCards} setIsReady={setIsReady} />
            }
        </>
    );
};

const CardList = (props: { isReady: boolean, cards: CardProps[] }) => {
    const { isReady, cards } = props;

    return (
        <>
            {
                isReady ?
                    <List cards={cards} /> :
                    <div className="flex items-center justify-center h-full">
                        <Ring lineWeight={3.5} />
                    </div>
            }
        </>
    );
};

export default Home;
