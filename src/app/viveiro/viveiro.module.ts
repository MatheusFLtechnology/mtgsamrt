import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViveiroPageRoutingModule } from './viveiro-routing.module';

import { ViveiroPage } from './viveiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViveiroPageRoutingModule
  ],
  declarations: [ViveiroPage]
})
export class ViveiroPageModule {}
