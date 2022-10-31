const FilterContainer = (props: { children: JSX.Element }) => {
    const { children } = props;

    return (
        <aside className="p-6 space-y-5 overflow-y-auto bg-white rounded-sm max-h-64 md:max-h-screen">
            {children}
        </aside>
    );
};

export default FilterContainer;