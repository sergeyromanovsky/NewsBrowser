export const handleFetch = (url, method, value) =>
    fetch(`/api/${url}`, {
        method,
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'include',
        body        : JSON.stringify(value)
    }).then((res) => res.json());
