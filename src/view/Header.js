import Component from "./component/Component";
import List from "./List";
import { channels } from "../common/data/channels";

const TEXT_HEAD_TITLE = "News headlines";

export default class Header extends Component {
    constructor() {
        super();
        this.header = document.querySelector(".header");
        this.list = new List();
    }

    render() {
        this.renderTitle();
        this.renderSelect();
    }

    renderTitle() {
        const h1 = this.createElement("h1");

        h1.textContent = TEXT_HEAD_TITLE;
        this.header.appendChild(h1);
    }

    renderSelect() {
        const fragmentOptions = document.createDocumentFragment();
        const select = this.createElement("select", "select-channels");
        let optionFirst = null;

        channels.forEach((item, index) => {
            const option = this.createElement("option");
            const [text, valueItem] = item;

            option.textContent = text;
            option.value = valueItem;

            if (index === 0) {
                optionFirst = valueItem;
            }

            fragmentOptions.appendChild(option);
        });

        select.appendChild(fragmentOptions);
        this.header.appendChild(select);

        this.dispatchSelected(this.header, optionFirst);

        this.handleClick(select);
    }

    handleClick(element) {
        element.addEventListener("change", ({ target }) => {
            this.dispatchSelected(element, target.value);
        }, false);
    }

    dispatchSelected(element, detail) {
        element.dispatchEvent(new CustomEvent("selected_channel", { detail, bubbles: true }));
    }
}
