import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViveiroPage } from './viveiro.page';

const routes: Routes = [
  {
    path: '',
    component: ViveiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViveiroPageRoutingModule {}
