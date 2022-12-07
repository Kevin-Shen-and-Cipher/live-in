export interface CardProps {
    name: string,
    address: string,
    url: string,
    district: {
        name: string,
        city: {
            name: string
        },
    }
};

export interface ApartmentCardProps extends CardProps {
    price: string,
    rent_type: {
        name: string
    },
    apartment_type: {
        name: string
    },
    room_type: {
        name: string
    },
    restrict: {
        name: string
    }[],
    device: {
        name: string
    }[],
    surroundingfacility: {
        name: string
    }[],
};

export interface JobCardProps extends CardProps {
    salary: string,
    tenure: string,
    job_position: {
        name: string
    },
    working_hour: {
        name: string
    },
    benefit: {
        name: string
    }[]
};