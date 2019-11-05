import Component from "./component/Component";

const TIME_SHOW_MODAL = 3000;

class Modal extends Component {
    constructor() {
        super();
        this.body = document.body;
        this.select = document.querySelector(".select-channels");
    }

    render(text) {
        this.modal = document.querySelector(".modal");

        if (!this.modal) {
            this.modal = this.createElement("div", "modal");
            this.modal.textContent = text;

            this.body.appendChild(this.modal);
        }

        this.open(text);
    }

    open(text) {
        this.modal.classList.add("top-animation");
        this.modal.textContent = text;

        if (this.select) {
            this.select.classList.add("disabled");
        }

        setTimeout(this.close.bind(this), TIME_SHOW_MODAL);
    }

    close() {
        this.select.classList.remove("disabled");
        this.modal.classList.remove("top-animation");
    }
}

const modal = new Modal();

export default modal;
