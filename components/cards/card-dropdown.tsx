import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';


const CardDropDown = (props: { children: JSX.Element }) => {
    const { children } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(state => !state);
    }

    return (
        <div>
            {open ? <hr className="mx-6 my-8" /> : ""}
            {open ? children : ""}
            <div
                className="flex justify-center py-4 cursor-pointer group"
                onClick={() => handleOpen()}
            >
                <DropDownIcon open={open} />
            </div>
        </div>
    );
};

const DropDownIcon = (props: { open: boolean }) => {
    const { open } = props;

    return (
        <>
            {
                open ?
                    <ChevronUpIcon className="w-8 h-8 group-hover:text-primary" /> :
                    <ChevronDownIcon className="w-8 h-8 group-hover:text-primary" />
            }
        </>
    );
};

export default CardDropDown;