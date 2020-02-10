import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { News, Configuration, Channel } from 'src/app/models';
import { NewsService } from 'src/app/services/news.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent implements OnInit, OnDestroy {
  @Input() public data: News;
  @Input() public channel: Channel;
  public defaultImgUrl = Configuration.DEFAULT_IMG_URL;
  public alertData: string;
  private loginSub: Subscription;
  private isLogged: boolean;

  constructor(
    private newsService: NewsService,
    private loginService: LoginService
  ) {}

  public ngOnInit(): void {
    this.loginSub = this.loginService.isLogged
      .subscribe((data: boolean) => this.isLogged = data);
  }

  public ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  public remove(): void {
    this.newsService.removeItem(this.data._id);
    this.newsService.deleteById(this.data._id)
      .subscribe();
  }

  public isButtonDisabled(): boolean {
    return !(Configuration.DATA_BASE_SOURCE === this.channel.value) || !this.isLogged;
  }
}
