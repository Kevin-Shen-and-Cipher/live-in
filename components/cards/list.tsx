import { ApartmentCardProps, JobCardProps } from '../../interfaces/ICard';
import ApartmentCard from './apartment-card';
import JobCard from './job-card';


const List = (props: { cards: ApartmentCardProps[] | JobCardProps[], page: string }) => {
    const { cards, page } = props;

    if (page === "apartment") {
        var cardItems = (cards as ApartmentCardProps[]).map((card: ApartmentCardProps, index: number) => {
            return (
                <ApartmentCard
                    key={card.name + "-" + index}
                    card={card}
                />
            );
        });
    } else {
        var cardItems = (cards as JobCardProps[]).map((card: JobCardProps, index: number) => {
            return (
                <JobCard
                    key={card.name + "-" + index}
                    card={card}
                />
            );
        });
    }

    return (
        <div className="h-full space-y-6">
            {cardItems.length ? cardItems : <WithoutCards />}
        </div>
    );
};


const WithoutCards = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="text-2xl font-bold text-gray-800">
                尚無搜尋結果!
            </p>
        </div>
    );
};

export default List;