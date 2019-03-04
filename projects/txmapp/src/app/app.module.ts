import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TxmComponentsModule } from 'txm-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TxmComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
