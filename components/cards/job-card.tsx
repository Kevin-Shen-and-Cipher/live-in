import React from 'react';
import CardDetailList from './card-detail-list';
import CardDropDown from './card-dropdown';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { JobCardProps } from '../../interfaces/ICard';
import CardContainer from './card-container';


const JobCard = (props: { card: JobCardProps }) => {
    const { card } = props;

    return (
        <CardContainer>
            <>
                <CardContent card={card} />

                <CardDropDown>
                    <div className="px-6 space-y-4">
                        <CardDetailList title="工作福利" items={card.benefit} />
                    </div >
                </CardDropDown>
            </>
        </CardContainer>
    );
};

const CardContent = (props: { card: JobCardProps }) => {
    const { card } = props;

    return (
        <div className="grid grid-cols-12 px-6 pt-6 lg:divide-x">
            <div className="flex flex-col justify-between lg:pr-4 col-span-full lg:col-span-8">
                <a target="_blank" rel="noreferrer" href={card.url} title={card.name}>
                    <div className="space-y-4 transition-all duration-300 group">
                        <h3 className="text-xl font-bold group-hover:text-primary">
                            {card.name}
                        </h3>
                        <p className="flex items-center text-md">
                            <MapPinIcon className="w-6 h-6" />
                            <span className="ml-2">
                                {card.district.city.name} {card.district.name}
                            </span>
                        </p>
                        <p className="text-sm text-gray-600">
                            {card.address}
                        </p>
                    </div>
                </a>
            </div>

            <hr className="my-8 lg:hidden col-span-full" />

            <div className="flex flex-col justify-between gap-5 lg:pl-4 col-span-full lg:col-span-4">
                <div className="space-y-4 font-semibold tracking-tight">
                    <p className="text-sm">
                        職位：<span className="font-medium">{card.job_position?.name}</span>
                    </p>
                    <p className="text-sm">
                        工作時段：<span className="font-medium">{card.working_hour?.name}</span>
                    </p>
                    <p className="text-sm">
                        需求年資：<span className="font-medium">{card.tenure}</span>
                    </p>
                    <p className="font-semibold tracking-wider text-red-500 text-md">
                        薪水：{card.salary}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobCard;