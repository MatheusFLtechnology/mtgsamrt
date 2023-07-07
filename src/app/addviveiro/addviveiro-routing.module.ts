import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddviveiroPage } from './addviveiro.page';

const routes: Routes = [
  {
    path: '',
    component: AddviveiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddviveiroPageRoutingModule {}
