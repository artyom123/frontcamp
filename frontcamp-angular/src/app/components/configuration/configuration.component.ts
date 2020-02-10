import { Component, OnInit, OnDestroy, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChannelService } from '../../services/channel.service';
import { Channel, Configuration } from '../../models';
import { NewsService } from '../../services/news.service';
import { LoginService } from '../../services/login.service';
import { FilterWordPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FilterWordPipe ]
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  public isLogged: boolean;
  public isChecked = false;
  public channels: Channel[];
  private channelSub: Subscription;
  private loginSub: Subscription;
  private titleSub: Subscription;

  @ViewChild('filterViewInput', {static: false}) filterViewInput: ElementRef;

  constructor(
    private channelService: ChannelService,
    private filterPipe: FilterWordPipe,
    private newsService: NewsService,
    private loginService: LoginService
  ) {}

  public ngOnInit(): void {
    this.channelSub = this.channelService.channels
      .subscribe((data: Channel[]) => this.channels = data);

    this.loginSub = this.loginService.isLogged
      .subscribe((data: boolean) => this.isLogged = data);

    this.titleSub = this.channelService.title
      .subscribe((data: string) => {
        if (data !== 'Local resource') {
          this.isChecked = false;
        } else {
          this.isChecked = true;
        }
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromService(this.channelSub);
    this.unsubscribeFromService(this.loginSub);
    this.unsubscribeFromService(this.titleSub);
  }

  public changeSourceTitle(value: string): void {
    const channel = this.channelService.getSource(value);
    this.channelService.setTitle(channel.title);
  }

  public filter(event: { target: HTMLInputElement; }): void {
    const inputValue = this.filterViewInput.nativeElement.value;

    if (inputValue.length) {
      const items = inputValue.split(/,\s?|\s/g);
      this.newsService.filter(items);
      this.filterViewInput.nativeElement.value = '';
    }
  }

  public showOwnNews(event: MouseEvent): void {
    const target: any = event.target;

    if (target.tagName === 'INPUT') {
      this.channelService.setSource(Configuration.DATA_BASE_SOURCE);
    }
  }

  private unsubscribeFromService(service: Subscription): void {
    if (service) {
      service.unsubscribe();
    }
  }
}
