import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddviveiroPageRoutingModule } from './addviveiro-routing.module';

import { AddviveiroPage } from './addviveiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddviveiroPageRoutingModule
  ],
  declarations: [AddviveiroPage]
})
export class AddviveiroPageModule {}
