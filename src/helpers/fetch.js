export const handleFetch = (url, method, value) =>
    fetch(`https://newsapi.org/v2/${url}`, {
        method,
        body : JSON.stringify(value)
    }).then((res) => res.json());
