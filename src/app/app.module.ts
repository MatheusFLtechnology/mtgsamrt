import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { api } from '../services/api';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ApiMqtt } from '../services/api.mqtt';

@NgModule({
  declarations: [AppComponent],
  imports: [ HttpClientModule,HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [api,ApiMqtt,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
