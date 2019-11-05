import Component from "./component/Component";

export default class Spinner extends Component {
    constructor() {
        super();
        this.list = document.querySelector(".list");

        this.isExist();
    }

    isExist() {
        this.spinner = document.querySelector(".loader");

        if (!this.spinner) {
            this.render();
        }

        this.close();
    }

    render() {
        this.spinner = this.createElement("div", "loader");
        this.list.appendChild(this.spinner);
    }

    open() {
        this.spinner.classList.remove("hidden");
    }

    close() {
        this.spinner.classList.add("hidden");
    }
}
