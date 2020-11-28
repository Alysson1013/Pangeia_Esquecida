import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaListComponent } from './noticia/noticia-list/noticia-list.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';

const routes: Routes = [
    { path: 'noticia', component: NoticiaListComponent },
    { path: 'noticia/novo', component: NoticiaFormComponent },
    { path: 'noticia/:id', component: NoticiaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }