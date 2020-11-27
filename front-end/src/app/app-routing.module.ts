import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaListComponent } from './noticia/noticia-list/noticia-list.component';

const routes: Routes = [
    { path: 'noticia', component: NoticiaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
