import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponentComponent } from './pages/book-component/book-component.component';
import { ReviewComponentComponent } from './pages/review-component/review-component.component';
import { UserComponentComponent } from './pages/user-component/user-component.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {path : 'books', component : BookComponentComponent},
  {path : 'reviews', component : ReviewComponentComponent},
  {path : 'profile', component : UserComponentComponent},
  {path : 'index', component : IndexComponent},
  {path : '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
