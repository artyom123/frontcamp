export default class Component {
    createElement(el, className, attr) {
        const element = document.createElement(el);

        if (className) {
            element.classList.add(className);
        }

        if (attr && !!attr.length) {
            const [name, value] = attr;

            element.setAttribute(name, value);
        }

        return element;
    }
}
