// convert to miliseconds
const twentyMinutes = 20 * 60 * 1000;

export const getValue = (arr) => arr.map(({ value }) => value);

export const multiFilter = (array, filters) => {
    // filters all elements passing the criteria
    const filterKeys = Object.keys(filters);
    const result = array.filter((item) =>
        // dynamically validate all filter criteria
        filterKeys.every((key) => {
            // ignores an empty filter
            if (!filters[key].length) return true;
            return filters[key].includes(item[key]);
        })
    );

    return result;
};

export const compareDate = () => +new Date() - localStorage.getItem('timestamp') > twentyMinutes;

// min delay, prevent flicker
export const dynamicImport = (path) =>
    Promise.all([
        import(`../pages/${path}`),
        new Promise((resolve) => setTimeout(resolve, 500))
    ]).then(([moduleExports]) => moduleExports);
