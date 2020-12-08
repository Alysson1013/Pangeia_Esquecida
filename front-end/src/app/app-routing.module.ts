import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaListComponent } from './noticia/noticia-list/noticia-list.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';
import { ArtigoListComponent } from './artigo/artigo-list/artigo-list.component';
import { ArtigoFormComponent } from './artigo/artigo-form/artigo-form.component';
import { PaleontologoListComponent } from './paleontologo/paleontologo-list/paleontologo-list.component';
import { PaleontologoFormComponent } from './paleontologo/paleontologo-form/paleontologo-form.component';
import { PeriodoListComponent } from './periodo/periodo-list/periodo-list.component';
import { PeriodoFormComponent } from './periodo/periodo-form/periodo-form.component';
import { CriaturaListComponent } from './criatura/criatura-list/criatura-list.component';
import { CriaturaFormComponent } from './criatura/criatura-form/criatura-form.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
    { path: 'noticia', component: NoticiaListComponent },
    { path: 'noticia/novo', component: NoticiaFormComponent },
    { path: 'noticia/:id', component: NoticiaFormComponent },
    { path: 'artigo', component: ArtigoListComponent },
    { path: 'artigo/novo', component: ArtigoFormComponent },
    { path: 'artigo/:id', component: ArtigoFormComponent },
    { path: 'paleontologo', component: PaleontologoListComponent },
    { path: 'paleontologo/novo', component: PaleontologoFormComponent },
    { path: 'paleontologo/:id', component: PaleontologoFormComponent },
    { path: 'periodo', component: PeriodoListComponent },
    { path: 'periodo/novo', component: PeriodoFormComponent },
    { path: 'periodo/:id', component: PeriodoFormComponent },
    { path: 'criatura', component: CriaturaListComponent },
    { path: 'criatura/novo', component: CriaturaFormComponent },
    { path: 'criatura/:id', component: CriaturaFormComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }