import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientePage } from './list-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ListClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListClientePageRoutingModule {}
