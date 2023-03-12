import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRouting, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { AppService } from './services/app.service';
import { CryptoService } from './services/crypto.service';
import { CurrencyService } from './services/currency.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    appRouting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgChartsModule
  ],
  providers: [AppService, CryptoService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
