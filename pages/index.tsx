import { CardProps } from '../interfaces/ICard';
import type { NextPage } from 'next'
import { useState } from 'react';
import ApartmentFilter from '../components/filters/apartment/apartment';
import JobFilter from '../components/filters/job/job';
import List from '../components/cards/list';
import Navigation from '../components/frontend/navigation';

const Home: NextPage = () => {
    const [page, setPage] = useState("apartment");
    const [cards, setCards] = useState<CardProps[]>([]);
    const [filter, setFilter] = useState(<ApartmentFilter setCards={setCards} />);

    const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === "job") {
            setFilter(<JobFilter key="job-filter" setCards={setCards} />);
            setPage("job");
        } else {
            setFilter(<ApartmentFilter key="apartment-filter" setCards={setCards} />);
            setPage("apartment");
        }

        setCards([]);
    };

    return (
        <>
            <Navigation handlePageChange={handlePageChange} page={page} />
            <div className="flex justify-center mx-4 my-16 md:mx-8">
                <div className="w-full max-w-screen-lg">
                    <div className="grid grid-cols-12 gap-5 place-items-stretch">
                        <div className="col-span-12 md:col-span-4">
                            {filter}
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <List cards={cards} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
