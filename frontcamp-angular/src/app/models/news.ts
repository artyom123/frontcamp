export interface News {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: Source;
  title: string | null;
  url: string | null;
  urlToImage: string | null;
  _id?: string;
}

export class NewsItem {
  public author: string;
  public title: string;
  public description: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: string;
  public content: string;
  public source: Source;

  public addAuthor(author: string): this {
    this.author = author;
    return this;
  }

  public addTitle(title: string): this {
    this.title = title;
    return this;
  }

  public addDescription(description: string): this {
    this.description = description;
    return this;
  }

  public addUrl(url: string): this {
    this.url = url;
    return this;
  }

  public addUrlToImage(urlToImage: string): this {
    this.urlToImage = urlToImage;
    return this;
  }

  public addPublishDate(publishedAt: string): this {
    this.publishedAt = publishedAt;
    return this;
  }

  public addContent(content: string): this {
    this.content = content;
    return this;
  }

  public addSource(id: string, name: string): this {
    this.source = new Source(id, name);
    return this;
  }
}

export class Source {
  constructor(public id: string, public name: string) {}
}
