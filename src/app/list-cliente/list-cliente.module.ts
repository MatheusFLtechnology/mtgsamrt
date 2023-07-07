import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListClientePageRoutingModule } from './list-cliente-routing.module';

import { ListClientePage } from './list-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListClientePageRoutingModule
  ],
  declarations: [ListClientePage]
})
export class ListClientePageModule {}
