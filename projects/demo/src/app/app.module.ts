import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeSelectModule } from 'we-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
