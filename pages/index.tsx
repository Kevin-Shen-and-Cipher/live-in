import { CardProps } from '../interfaces/ICard';
import type { NextPage } from 'next'
import { useState } from 'react';
import ApartmentFilter from '../components/filters/apartment/apartment';
import JobFilter from '../components/filters/job/job';
import List from '../components/cards/list';
import Navigation from '../components/fronted/navigation';

const Home: NextPage = () => {
    const [page, setPage] = useState("department");
    const [filter, setFilter] = useState(<ApartmentFilter />);
    const [cards, SetCards] = useState<CardProps[]>([]);

    const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPage(e.currentTarget.name);
        if (e.currentTarget.name === "job") {
            setFilter(<JobFilter />);
            SetCards(getData2());

        } else {
            setFilter(<ApartmentFilter />);
            SetCards(getData());
        }
    };

    return (
        <>
            <Navigation handlePageChange={handlePageChange} />
            <div className="flex justify-center mx-4 my-16 md:mx-8">
                <div className="w-full max-w-screen-lg">
                    <div className="grid grid-cols-12 gap-5 place-items-stretch">
                        <div className="col-span-12 md:col-span-4">
                            {filter}
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <List cards={cards}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const getData = () => {
    return [
        {
            title: "test1",
            link: "https://www.google.com"
        },
        {
            title: "test2",
            link: "https://www.google.com"
        },
        {
            title: "test3",
            link: "https://www.google.com"
        },
        {
            title: "test4",
            link: "https://www.google.com"
        },
    ];
}

const getData2 = () => {
    return [
        {
            title: "job1",
            link: "https://www.google.com"
        },
        {
            title: "job2",
            link: "https://www.google.com"
        },
    ];
}

export default Home;
