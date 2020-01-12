import Component from "./component/Component";

const TEXT_FOOTER = "Powered by NEWSAPI";

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
        FooterInformation.textContent = TEXT_FOOTER;

        footerWrapper.appendChild(footerCopyright);
        footerWrapper.appendChild(FooterInformation);
        this.footer.appendChild(footerWrapper);
    }
}
