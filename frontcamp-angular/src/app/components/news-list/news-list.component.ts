import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ChannelService } from 'src/app/services/channel.service';
import { Subscription } from 'rxjs';
import { Channel, News } from 'src/app/models';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit, OnDestroy {
    public displayData: News[];
    public news: News[];
    private numberOfDisplayedItems = 4;
    private channelSub: Subscription;
    private newsSub: Subscription;

    constructor(
        private newsService: NewsService,
        private channelService: ChannelService
    ) {}

    public ngOnInit(): void {
        this.channelSub = this.channelService.title
            .subscribe((data: string) => {
                const source: Channel = this.channelService.getSource(data);

                if (source && !this.isSourceEqual(source)) {
                    this.newsService.get(source.value);
                }
            });

        this.newsSub = this.newsService.items
            .subscribe((data: News[]) => {
                this.news = data;
                this.displayData = this.news.slice(0, this.numberOfDisplayedItems);
            });
    }

    public ngOnDestroy(): void {
        if (this.channelSub) {
            this.channelSub.unsubscribe();
        }

        if (this.newsSub) {
            this.newsSub.unsubscribe();
        }
    }

    public loadMoreNews(): void {
        this.numberOfDisplayedItems *= 2;
        this.displayData = this.news.slice(0, this.numberOfDisplayedItems);
    }

    private isSourceEqual(source): boolean {
        const items = this.newsService.items.getValue();
        return Boolean(items.find(item => item.source.id === source.value));
    }
}
