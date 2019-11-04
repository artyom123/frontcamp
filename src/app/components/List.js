import Component from "./Component";
import Spinner from "./Spinner";

import { LoggerRequest } from "../api/index";
import { formatDate } from "../utils";

const API_KEY = "d2be29cff2a7414d9461168e63b274cb";
const HOST = "https://newsapi.org";
const NEWS_COUNT = 10;

export default class List extends Component {
    constructor() {
        super();
        this.spinner = new Spinner();
        this.list = document.querySelector(".list");

        this.handleSelectChannel();
    }

    handleSelectChannel() {
        document.addEventListener("selected_channel", this.asyncCall.bind(this));
    }

    async asyncCall({ detail }) {
        this.spinner.open();

        const url = `${HOST}/v1/articles?source=${detail}&apiKey=${API_KEY}`;
        const news = await LoggerRequest.send({ method: "GET", url });

        this.render(news);
    }

    render(news) {
        const { articles } = news;

        this.spinner.close();
        this.isCreateBlock();

        if (articles) {
            this.renderBlock(articles);
        } else this.asyncCallModal(news);
    }

    async asyncCallModal(text) {
        this.modal = await import("./Modal");
        this.modal.default.render(text);
    }

    isCreateBlock() {
        this.newsBlock = this.list.querySelector(".news-block");

        if (!this.newsBlock) {
            this.newsBlock = this.createElement("div", "news-block");
        } else this.newsBlock.innerHTML = "";
    }

    renderBlock(articles) {
        const fragmentNews = document.createDocumentFragment();
        const countArticles = Math.min(articles.length, NEWS_COUNT);

        for (let i = 0; i < countArticles; i += 1) {
            this.renderBlockItem(fragmentNews, articles[i]);
        }

        this.newsBlock.appendChild(fragmentNews);
        this.list.appendChild(this.newsBlock);
    }

    renderBlockItem(fragmentNews, articles) {
        const {
            description,
            publishedAt,
            title,
            url,
            urlToImage,
        } = articles;

        const newsItem = this.createElement("div", "news-item");
        const newsItemImg = this.createElement("img", "news-item-img", ["src", urlToImage]);
        const newsItemBlock = this.createElement("div", "news-item-block");

        newsItem.appendChild(newsItemImg);
        newsItem.appendChild(newsItemBlock);

        const newsItemBlockTitle = this.createElement("a", "news-item-block-title", ["href", url]);

        const newsItemBlockDescription = this.createElement("div", "news-item-block-description");
        const newsItemBlockDate = this.createElement("small", "news-item-block-date");

        newsItemBlockTitle.textContent = title;

        newsItemBlockDescription.textContent = description;
        newsItemBlockDate.textContent = formatDate(publishedAt);

        newsItemBlock.appendChild(newsItemBlockTitle);
        newsItemBlock.appendChild(newsItemBlockDescription);
        newsItemBlock.appendChild(newsItemBlockDate);

        fragmentNews.appendChild(newsItem);
    }
}
