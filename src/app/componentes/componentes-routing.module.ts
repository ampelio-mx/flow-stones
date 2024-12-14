import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { CardsProductosComponent } from './cards-productos/cards-productos.component';
import { CardTiposPiedrasComponent } from './card-tipos-piedras/card-tipos-piedras.component';

const routes: Routes = [
  {path:'barra-menu',component:BarraMenuComponent},
  {path: 'cards-productos', component: CardsProductosComponent},
  {path: 'cards-tipos-piedras', component: CardTiposPiedrasComponent},
  {path:'**', pathMatch:'full', redirectTo:'cards-productos'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
