import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { DetallePostsComponent } from './detalle-posts/detalle-posts.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginsComponent } from './logins/logins.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostsComponent,
    DetallePostsComponent,
    LoginsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
