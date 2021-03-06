import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TvmazeModule } from 'tvmaze';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TvmazeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
