import Component from "./Component";
import Modal from "./Modal";
import Spinner from "./Spinner";

import ApiNews from "../ApiNews";

import { formatDate } from "../utils";

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

        const news = await ApiNews.getNewsOnChannel(detail);

        this.render(news);
    }

    render({ articles }) {
        this.isCreateBlock();

        if (articles) {
            this.modal.close();
            this.renderBlock(articles);
        } else this.modal = new Modal("Choose another option");

        this.spinner.close();
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
