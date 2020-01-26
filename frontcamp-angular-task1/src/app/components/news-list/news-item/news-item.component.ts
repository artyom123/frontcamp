import { Component, Input } from '@angular/core';
import { News } from 'src/app/models';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
    @Input() public data: News;
    @Input() public id: number;
    public defaultImgUrl = 'https://www.tsum.by/upload/no-photo.png';

    constructor(private newsService: NewsService) {}

    public remove(): void {
        this.newsService.removeItem(this.id);
    }
}
