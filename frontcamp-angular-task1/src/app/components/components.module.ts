
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component'; // changed
import { LoadMoreBtnComponent } from './news-list/load-more-btn/load-more-btn.component';
import { NewsComponent } from './news/news.component';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  declarations: [
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    ConfigurationComponent,
    NewsListComponent,
    NewsItemComponent,
    LoadMoreBtnComponent,
    NewsComponent,
    NewsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    ConfigurationComponent,
    NewsListComponent,
    NewsItemComponent,
    LoadMoreBtnComponent,
    NewsComponent,
    NewsFormComponent
  ],
  providers: [],
})
export class ComponentsModule {}
