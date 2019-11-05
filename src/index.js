import "./index.scss";
import "./app/api/proxy";

import Header from "./app/components/Header";
import Footer from "./app/components/Footer";


const header = new Header();
const footer = new Footer();

header.render();
footer.render();
