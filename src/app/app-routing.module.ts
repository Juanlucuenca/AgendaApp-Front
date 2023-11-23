import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioSinLoguear } from './guards/usuario-sin-loguear.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    // canActivate: [usuarioSinLoguear],
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
    // canActivate: [usuarioSinLoguear],
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
    // canActivate: [usuarioSinLoguear],
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoModule),
    // canActivate: [usuarioSinLoguear],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
