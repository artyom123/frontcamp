import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit, OnDestroy {
    @Input() public title: string;

    private channelSub: Subscription;

    constructor(private channelService: ChannelService) {}

    public ngOnInit(): void {
        if (!this.title) {
            this.channelSub = this.channelService.title
            .subscribe((data: string) => this.title = data);
        }
    }

    public ngOnDestroy(): void {
        if (this.channelSub) {
            this.channelSub.unsubscribe();
        }
    }
}
