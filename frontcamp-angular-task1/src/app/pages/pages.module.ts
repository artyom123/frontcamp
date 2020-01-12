import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    ContactPageComponent,
    MainPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ContactPageComponent,
    MainPageComponent,
    NotFoundPageComponent
  ],
  providers: [],
})
export class PagesModule {}
