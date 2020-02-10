import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Channel, Configuration } from '../models';
import { channels } from '../stubs';
import { LoginService } from './login.service';

@Injectable()
export class ChannelService {
  private defaultChannel: Channel = new Channel('abc-news', 'ABC News');
  private convertedData: Channel[] = [];
  private isLogged: boolean;

  public channels = new BehaviorSubject<Channel[]>([this.defaultChannel]);
  public title = new BehaviorSubject<string>(this.defaultChannel.title);

  constructor(private loginService: LoginService) {
    this.loginService.isLogged
      .subscribe((data: boolean) => this.isLogged = data);
    this.fillChannels();
  }

  public setTitle(title: string): void {
    this.title.next(title);
  }

  public getSource(value: string): Channel {
    return this.convertedData.find(item => item.value === value || item.title === value);
  }

  public setSource(value: string): void {
    const items = this.channels.getValue();
    const channel = items.find((item: Channel) => item.value === value);

    this.setTitle(channel.title);
  }

  public setVisibleForSource(value: string): void {
    const items = this.channels.getValue();
    const source = items.find(item => item.value === value);

    source.setVisible();

    this.channels.next(items);
  }

  private fillChannels(): void {
    channels.forEach((value, key) => {
      const channel = new Channel(value, key);

      if (!this.isLogged && value === Configuration.DATA_BASE_SOURCE) {
        channel.setHidden();
      }

      this.convertedData.push(channel);
    });

    this.channels.next(this.convertedData);
  }
}
