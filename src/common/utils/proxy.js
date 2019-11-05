/* eslint-disable no-console, no-param-reassign */
import { RequestFactory } from "../../model/index";

const LoggerRequest = new Proxy(RequestFactory, {
    get(target, name, receiver) {
        return Reflect.get({
            send() {
                const sendRequest = target.send;

                target.send = (options) => {
                    console.log(`Request type: ${options.method}`);
                    console.log(`Url: ${options.url}`);

                    return sendRequest.call(null, options);
                };
            },
        }, name, receiver);
    },
});

LoggerRequest.send();
