import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    DashboardComponent,
    EditPageComponent,
    NewsPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    NotFoundPageComponent,
    DashboardComponent,
    EditPageComponent,
    NewsPageComponent,
    LoginPageComponent
  ],
  providers: [],
})
export class PagesModule {}
