import { CardProps } from '../interfaces/ICard';
import type { NextPage } from 'next'
import { useState } from 'react';
import ApartmentFilter from '../components/filters/apartment/apartment';
import JobFilter from '../components/filters/job/job';
import List from '../components/cards/list';
import Navigation from '../components/frontend/navigation';
import { Ring } from '@uiball/loaders';

const Home: NextPage = () => {
    const [page, setPage] = useState<string>("apartment");
    const [cards, setCards] = useState<CardProps[]>([]);
    const [isReady, setIsReady] = useState<boolean>(true);
    const [filter, setFilter] = useState(<ApartmentFilter setCards={setCards} setIsReady={setIsReady} />);

    const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === "job") {
            setFilter(<JobFilter setCards={setCards} setIsReady={setIsReady} />);
            setPage("job");
        } else {
            setFilter(<ApartmentFilter setCards={setCards} setIsReady={setIsReady} />);
            setPage("apartment");
        }

        setCards([]);
    };

    return (
        <>
            <Navigation handlePageChange={handlePageChange} page={page} />
            <div className="flex justify-center mx-4 my-16 md:mx-8">
                <div className="w-full max-w-screen-lg">
                    <div className="grid grid-cols-12 gap-x-5 gap-y-10">
                        <div className="col-span-12 md:col-span-4">
                            {filter}
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            {isReady ? <List cards={cards} /> : 
                            <div className="flex items-center justify-center h-full">
                                <Ring lineWeight={3.5} />
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
