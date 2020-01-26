import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';


const routes: Routes = [
  { path: 'edit/:id', component: EditPageComponent, data: { type: 'edit' }  },
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'add', component: EditPageComponent, data: { type: 'add' } },
  { path: '404', component: NotFoundPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
