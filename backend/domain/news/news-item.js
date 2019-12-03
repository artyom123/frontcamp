class NewsItem {
    constructor() {
        this.author;
        this.title;
        this.description;
        this.url;
        this.urlToImage;
        this.publishedAt;
        this.content;
        this.source;
    }

    addAuthor(author) {
        this.author = author;
        return this;
    }

    addTitle(title) {
        this.title = title;
        return this;
    }

    addDescription(description) {
        this.description = description;
        return this;
    }

    addUrl(url) {
        this.url = url;
        return this;
    }

    addUrlToImage(urlToImage) {
        this.urlToImage = urlToImage;
        return this;
    }

    addPublishDate(publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
}

module.exports = NewsItem;
