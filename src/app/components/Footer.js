import Component from "./Component";

export default class Footer extends Component {
    constructor() {
        super();
        this.footer = document.querySelector(".footer");
    }

    render() {
        const footerWrapper = this.createElement("div", "footer-wrapper");
        const footerCopyright = this.createElement("small", "footer-copyright");
        const FooterInformation = this.createElement("small", "footer-information");

        footerCopyright.textContent = `© ${new Date().getFullYear()}`;
        FooterInformation.textContent = "Powered by NEWSAPI";

        footerWrapper.appendChild(footerCopyright);
        footerWrapper.appendChild(FooterInformation);
        this.footer.appendChild(footerWrapper);
    }
}
