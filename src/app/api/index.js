/* eslint-disable no-console */
export function Request({ method, url }) {
    const headers = new Headers();

    return fetch(url, { method, headers })
        .then((res) => {
            if (res.status >= 400 && res.status < 500) {
                return "Choose another option";
            } else if (res.status >= 500 && res.status < 600) {
                return "Error server";
            }

            return res.json();
        })
        .catch((err) => err);
}

export class RequestFactory {
    static send(options) {
        return new Request(options);
    }
}

export const LoggerRequest = new Proxy(RequestFactory, {
    get(target, name, receiver) {
        return Reflect.get({
            send(options) {
                console.log(`Request type: ${options.method}`);
                console.log(`Url: ${options.url}`);
                return target.send(options);
            },
        }, name, receiver);
    },
});
