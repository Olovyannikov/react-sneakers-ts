/**
 * Отравляет запрос
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса.
 **/

export const getData = async (url: string) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch', res.status);
            return false;
        }

        return await res.json();
    } catch (error: any) {
        console.error('Could not fetch', error.message)
        return false;
    }
};

export const makeConcurrentRequest = async (url: string[]) => {
    return await Promise.all(url.map(data => {
        return fetch(data).then(result => result.json());
    }));
}