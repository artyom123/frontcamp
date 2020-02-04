import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News, Channel } from 'src/app/models';
import { Subscription } from 'rxjs';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
    public data: News;
    public id: string;
    public defaultImgUrl = 'https://www.tsum.by/upload/no-photo.png';
    private news: News[];
    private newsSub: Subscription;

    constructor(
      private route: ActivatedRoute,
      private newsService: NewsService,
      private channelService: ChannelService,
      private router: Router
    ) {}

    public ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');

      this.newsSub = this.newsService.items
        .subscribe((data: News[]) => {
          if (!data.length) {
              this.getNews();
          } else {
              this.news = data;
              this.data = this.news[this.id];
          }
        });
    }

    public ngOnDestroy(): void {
        if (this.newsSub) {
            this.newsSub.unsubscribe();
        }
    }

    public remove(): void {
      this.newsService.removeItem(Number(this.id));
      this.router.navigateByUrl('/dashboard');
    }

    private getNews(): void {
      const channelTitle: string = this.channelService.title.getValue();
      const source: Channel = this.channelService.getSource(channelTitle);

      if (source) {
        this.newsService.get(source.value);
      }
    }
}
