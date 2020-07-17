import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioformComponent } from './usuarioform/usuarioform.component';


const routes: Routes = [
  {
    path:'alumno',
    component:UsuarioformComponent

  },
  {
    path:'login',
    component: LoginComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
