import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KinosaalComponent } from './kinosaal/kinosaal.component';
import { KontrollstrukturenComponent } from './kontrollstrukturen/kontrollstrukturen.component';

@NgModule({
  declarations: [
    AppComponent,
    KinosaalComponent,
    KontrollstrukturenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
