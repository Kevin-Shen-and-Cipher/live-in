import { ApartmentCardProps, JobCardProps } from '../interfaces/ICard';
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Ring } from '@uiball/loaders';

import ApartmentFilter from '../components/filters/apartment/apartment';
import JobFilter from '../components/filters/job/job';
import List from '../components/cards/list';
import Navigation from '../components/frontend/navigation';


const Home: NextPage = () => {
    const [page, setPage] = useState<string>("apartment");
    const [cards, setCards] = useState<ApartmentCardProps[] | JobCardProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleSearchResult = (cards: ApartmentCardProps[] | JobCardProps[]) => {
        setCards(cards);
    };

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
                                handleSearchResult={handleSearchResult}
                                setIsLoading={setIsLoading}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <CardList
                                isLoading={isLoading}
                                cards={cards}
                                page={page}
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
    handleSearchResult: (cards: ApartmentCardProps[] | JobCardProps[]) => void,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}) => {
    const { page, handleSearchResult, setIsLoading } = props;

    return (
        <>
            {
                page === "apartment" ?
                    <ApartmentFilter handleSearchResult={handleSearchResult} setIsLoading={setIsLoading} /> :
                    <JobFilter handleSearchResult={handleSearchResult} setIsLoading={setIsLoading} />
            }
        </>
    );
};

const CardList = (props: { isLoading: boolean, cards: ApartmentCardProps[] | JobCardProps[], page: string }) => {
    const { isLoading, cards, page } = props;

    return (
        <>
            {
                isLoading ?
                    <List cards={cards} page={page} /> :
                    <div className="flex items-center justify-center h-full">
                        <Ring lineWeight={3.5} />
                    </div>
            }
        </>
    );
};

export default Home;
