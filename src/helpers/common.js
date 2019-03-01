export const getValue = (arr) => arr.map(({ value }) => value);

export const multiFilter = (array, filters) => {
    // filters all elements passing the criteria
    const filterKeys = Object.keys(filters);
    const result = array.filter((item) =>
        // dynamically validate all filter criteria
        filterKeys.every((key) => {
            // ignores an empty filter
            if (!filters[key].length) return true;

            const innerResult = filters[key].includes(item[key]);
            return innerResult;
        })
    );

    return result;
};
