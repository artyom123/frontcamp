import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel, News } from 'src/app/models';
import { FilterWordPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ FilterWordPipe ]
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  public news: News[];
  public channels: Channel[];
  private channelSub: Subscription;

  constructor(
    private channelService: ChannelService,
    private filterPipe: FilterWordPipe,
  ) {}

  public ngOnInit(): void {
    this.channelSub = this.channelService.channels
      .subscribe((data: Channel[]) => this.channels = data);
  }

  public ngOnDestroy(): void {
    if (this.channelSub) {
      this.channelSub.unsubscribe();
    }
  }

  public changeSourceTitle(value: string): void {
    const channel = this.channelService.getSource(value);
    this.channelService.setTitle(channel.title);
  }

  public filter(event: { target: HTMLInputElement; }): void {
    this.news = this.filterPipe.transform(this.news, event.target.value);
    console.log('Filter');
  }

  public showOwnNews(event: MouseEvent): void {
    const target: any = event.target;

    if (target.tagName === 'INPUT') {
      console.log('My news');
    }
  }
}
