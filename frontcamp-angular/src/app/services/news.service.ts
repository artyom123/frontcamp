import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { News } from '../models';

const API_KEY = 'd2be29cff2a7414d9461168e63b274cb';
const HOST = 'https://newsapi.org';

@Injectable()
export class NewsService {
    public items = new BehaviorSubject<News[]>([]);

    constructor(private http: HttpClient) {}

    public get(source: string): void {
        this.http
            .get(`${HOST}/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`)
            .subscribe((data: any) => this.items.next(data.articles));
    }

    public removeItem(id: number): void {
        const news = this.items.getValue();
        news.splice(id, 1);

        this.items.next(news);
    }
}
