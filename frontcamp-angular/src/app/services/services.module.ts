import { NgModule } from '@angular/core';
import { ChannelService } from './channel.service';
import { NewsService } from './news.service';

@NgModule({
    providers: [
        ChannelService,
        NewsService
    ],
})
export class ServicesModule {}
