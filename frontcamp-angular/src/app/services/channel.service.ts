import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from '../models';
import { channels } from '../stubs';

@Injectable()
export class ChannelService {
    private defaultChannel: Channel = new Channel('abc-news', 'ABC News');
    private convertedData: Channel[] = [];

    public channels = new BehaviorSubject<Channel[]>([this.defaultChannel]);
    public title = new BehaviorSubject<string>(this.defaultChannel.title);

    constructor() {
        this.fillChannels();
    }

    public setTitle(title: string): void {
        this.title.next(title);
    }

    public getSource(value: string): Channel {
        return this.convertedData.find(item => item.value === value || item.title === value);
    }

    private fillChannels(): void {
        channels.forEach((value, key) => {
            const channel = new Channel(value, key);
            this.convertedData.push(channel);
        });

        this.channels.next(this.convertedData);
    }
}
