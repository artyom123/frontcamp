import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel } from 'src/app/models';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {
    public channels: Channel[];
    private channelSub: Subscription;

    constructor(private channelService: ChannelService) {}

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

    public filter(): void {
        console.log('Filter');
    }

    public showOwnNews(event: MouseEvent): void {
        const target: any = event.target;

        if (target.tagName === 'INPUT') {
            console.log('My news');
        }
    }
}
