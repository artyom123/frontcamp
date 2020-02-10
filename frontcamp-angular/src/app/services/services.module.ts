import { NgModule } from '@angular/core';
import { ChannelService } from './channel.service';
import { NewsService } from './news.service';
import { LoginService } from './login.service';

@NgModule({
  providers: [
    ChannelService,
    NewsService,
    LoginService
  ],
})
export class ServicesModule {}
