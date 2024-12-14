import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'principal', loadChildren:()=> import('./principal/principal.module').then(m=>m.PrincipalModule)},
  {path:'componentes', loadChildren:()=> import('./componentes/componentes.module').then(m=>m.ComponentesModule)},
  {path:'**', pathMatch:'full',redirectTo:'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
