const API_KEY = "d2be29cff2a7414d9461168e63b274cb";
const HOST = "https://newsapi.org:";

export default class ApiNews {
    static getNewsOnChannel(channel) {
        const url = `${HOST}/v1/articles?source=${channel}&apiKey=${API_KEY}`;

        return fetch(url).then((res) => res.json());
    }
}
