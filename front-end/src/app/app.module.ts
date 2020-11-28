  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoticiaListComponent } from './noticia/noticia-list/noticia-list.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';
import { ArtigoListComponent } from './artigo/artigo-list/artigo-list.component';
import { ArtigoFormComponent } from './artigo/artigo-form/artigo-form.component';
import { PaleontologoListComponent } from './paleontologo/paleontologo-list/paleontologo-list.component';
import { PaleontologoFormComponent } from './paleontologo/paleontologo-form/paleontologo-form.component';
import { PeriodoListComponent } from './periodo/periodo-list/periodo-list.component';
import { PeriodoFormComponent } from './periodo/periodo-form/periodo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    NoticiaListComponent,
    NoticiaFormComponent,
    ArtigoListComponent,
    ArtigoFormComponent,
    PaleontologoListComponent,
    PaleontologoFormComponent,
    PeriodoListComponent,
    PeriodoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }