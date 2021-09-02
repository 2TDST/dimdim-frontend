import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAgenciaComponent } from './components/add-agencia/add-agencia.component';
import { AgenciaDetailsComponent } from './components/agencia-details/agencia-details.component';
import { AgenciaListComponent } from './components/agencia-list/agencia-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAgenciaComponent,
    AgenciaDetailsComponent,
    AgenciaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
