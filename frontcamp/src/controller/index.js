import "../style/index.scss";
import "../common/utils/proxy";

import Header from "../view/Header";
import Footer from "../view/Footer";


const header = new Header();
const footer = new Footer();

header.render();
footer.render();
