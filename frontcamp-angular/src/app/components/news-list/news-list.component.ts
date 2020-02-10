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
  private numberOfDisplayedItems = 5;
  public source: Channel;
  public isFiltered = false;
  private channelSub: Subscription;
  private newsSub: Subscription;
  private filterItemsSub: Subscription;

  constructor(
    private newsService: NewsService,
    private channelService: ChannelService
  ) {}

  public ngOnInit(): void {
    this.channelSub = this.channelService.title
      .subscribe((data: string) => {
        this.source = this.channelService.getSource(data);

        if (this.source && !this.isSourceEqual(this.source)) {
          this.newsService.get(this.source.value);
        }
      });

    this.newsSub = this.newsService.items
      .subscribe((data: News[]) => {
        this.isFiltered = false;
        this.news = data;
        this.displayData = this.news.slice(0, this.numberOfDisplayedItems);
      });

    this.filterItemsSub = this.newsService.filterItems
        .subscribe((data: string[]) => this.filterDisplayedData(data));
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromService(this.channelSub);
    this.unsubscribeFromService(this.newsSub);
    this.unsubscribeFromService(this.filterItemsSub);
  }

  public loadMoreNews(): void {
    this.numberOfDisplayedItems *= 2;
    this.displayData = this.news.slice(0, this.numberOfDisplayedItems);
  }

  private isSourceEqual(source): boolean {
      const items = this.newsService.items.getValue();
      return Boolean(items.find(item => item.source.id === source.value));
  }

  private filterDisplayedData(filterItems: string[]): void {
    this.displayData = this.displayData.filter(news => {
      let count = 0;

      filterItems.forEach(item => {
        const title = news.title.toLowerCase();

        if (title.includes(item.toLowerCase())) {
          count++;
        }
      });

        return count === filterItems.length;
    });

    this.isFiltered = true;
  }

  private unsubscribeFromService(service: Subscription): void {
    if (service) {
      service.unsubscribe();
    }
  }
}
