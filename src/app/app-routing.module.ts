import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'viveiro',
    loadChildren: () => import('./viveiro/viveiro.module').then( m => m.ViveiroPageModule)
  },
  {
    path: 'addviveiro',
    loadChildren: () => import('./addviveiro/addviveiro.module').then( m => m.AddviveiroPageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'list-cliente',
    loadChildren: () => import('./list-cliente/list-cliente.module').then( m => m.ListClientePageModule)
  },
  {
    path: 'edit-cliente/:IdCliente',
    loadChildren: () => import('./edit-cliente/edit-cliente.module').then( m => m.EditClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
