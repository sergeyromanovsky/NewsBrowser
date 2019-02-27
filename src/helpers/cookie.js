export const getCookie = (name) => {
    const matches = document.cookie.match(
        new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

export const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
