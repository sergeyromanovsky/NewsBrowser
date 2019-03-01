export const handleFetch = (url, method, value) =>
    fetch(`https://newsapi.org/v1/${url}&apiKey=3d64dc6acda34e05a4b7240069eb86ca`, {
        method,
        body : JSON.stringify(value)
    }).then((res) => res.json());
