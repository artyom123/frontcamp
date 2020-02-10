import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NewsService } from 'src/app/services/news.service';
import { ChannelService } from 'src/app/services/channel.service';
import { News, Channel, Configuration } from 'src/app/models';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnDestroy {
  public data: News;
  public id: string;
  public defaultImgUrl = Configuration.DEFAULT_IMG_URL;
  public isVisible = true;
  public alertData: string;
  private news: News[];
  private newsSub: Subscription;
  private channelSub: Subscription;
  private loginSub: Subscription;
  private source: Channel;
  private isLogged: boolean;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private channelService: ChannelService,
    private router: Router,
    private loginService: LoginService
  ) {}

  public ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.newsSub = this.newsService.items
      .subscribe((data: News[]) => {
        if (!data.length) {
          this.getNews();
        } else {
          this.news = data;
          this.data = this.news.find(item => item._id === this.id);
        }
    });

    this.channelSub = this.channelService.title
      .subscribe((data: string) => this.source = this.channelService.getSource(data));

    this.loginSub = this.loginService.isLogged
      .subscribe((data: boolean) => this.isLogged = data);
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromService(this.newsSub);
    this.unsubscribeFromService(this.channelSub);
    this.unsubscribeFromService(this.loginSub);
  }

  public remove(): void {
    this.newsService.deleteById(this.id)
      .subscribe(data => {
        this.alertData = data.status;
        this.isVisible = false;
        setTimeout(() => this.router.navigateByUrl('/dashboard'), 2000);
      });
  }

  public isButtonDisabled(): boolean {
    return !(Configuration.DATA_BASE_SOURCE === this.source.value) || !this.isLogged;
  }

  private unsubscribeFromService(service: Subscription): void {
    if (service) {
        service.unsubscribe();
    }
  }

  private getNews(): void {
    const channelTitle: string = this.channelService.title.getValue();
    const source: Channel = this.channelService.getSource(channelTitle);

    if (source) {
      this.newsService.get(source.value);
    }
  }
}
