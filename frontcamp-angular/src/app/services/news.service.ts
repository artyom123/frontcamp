import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import * as generateUuid from 'uuid/v4';

import { News, Configuration } from '../models';

@Injectable()
export class NewsService {
  public items = new BehaviorSubject<News[]>([]);
  public filterItems = new Subject<string[]>();

  constructor(
    private http: HttpClient
  ) {}

  public getAllNews(): Observable<any> {
    return this.http.get('api/news');
  }

  public getNewsById(id: string): Observable<any> {
    return this.http.get(`api/news/${id}`);
  }

  public saveNewNews(news: News): Observable<any> {
    return this.http.post('api/news', news);
  }

  public updateNewsById(id: string, news: News): Observable<any> {
    return this.http.put(`api/news/${id}`, news);
  }

  public deleteById(id: string): Observable<any> {
    this.removeItem(id);
    return this.http.delete(`api/news/${id}`);
  }

  public get(source: string): void {
    if (source === Configuration.DATA_BASE_SOURCE) {
      this.getAllNews()
        .subscribe((data: News[]) => this.items.next(data));
    } else {
      this.http
        .get(`${Configuration.HOST}/v2/top-headlines?sources=${source}&apiKey=${Configuration.API_KEY}`)
        .subscribe((data: any) => {
          const articles = data.articles;

          articles.forEach(item => {
              item._id = generateUuid();
          });

          this.items.next(articles);
        });
    }
  }

  public removeItem(id: string): void {
    const news = this.items.getValue();
    const index = news.findIndex(item => item._id === id);

    news.splice(index, 1);

    this.items.next(news);
  }

  public filter(items: string[]): void {
    this.filterItems.next(items);
  }
}
