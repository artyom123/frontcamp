import Component from "./Component";

const TIME_SHOW_MODAL = 3000;

export default class Modal extends Component {
    constructor(text) {
        super();
        this.body = document.body;
        this.select = document.querySelector(".select-channels");

        this.isExist(text);
    }

    isExist(text) {
        this.modal = document.querySelector(".modal");

        if (!this.modal) {
            this.modal = this.createElement("div", "modal");
            this.body.appendChild(this.modal);
        }

        this.open(text);
    }

    render(text) {
        this.modal = this.createElement("div", "modal");
        this.modal.textContent = text;

        this.body.appendChild(this.modal);
    }

    open(text) {
        this.modal.classList.add("top-animation");
        this.select.classList.add("disabled");
        this.modal.textContent = text;

        setTimeout(this.close.bind(this), TIME_SHOW_MODAL);
    }

    close() {
        this.select.classList.remove("disabled");
        this.modal.classList.remove("top-animation");
    }
}
