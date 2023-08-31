import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'blog', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'blog/:slug',
    component: PostComponent,
    pathMatch: 'full',
  },
  { path: 'author', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: HomeComponent, pathMatch: 'full' },
  { path: 'newsletter', component: HomeComponent, pathMatch: 'full' },

  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
