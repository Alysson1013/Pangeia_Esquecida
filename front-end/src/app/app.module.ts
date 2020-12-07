import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } 
from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

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
import { CriaturaListComponent } from './criatura/criatura-list/criatura-list.component';
import { CriaturaFormComponent } from './criatura/criatura-form/criatura-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    CriaturaListComponent,
    CriaturaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    Ng2SearchPipeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
    /**********************************************/  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }