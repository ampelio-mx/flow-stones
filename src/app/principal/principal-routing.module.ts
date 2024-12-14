import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { EquipoTrabajoComponent } from './equipo-trabajo/equipo-trabajo.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { TiposPiedrasComponent } from './tipos-piedras/tipos-piedras.component';
import { TiposPiedrasGranitoComponent } from './tipos-piedras-granito/tipos-piedras-granito.component';
import { TiposPiedraCuarzoComponent } from './tipos-piedra-cuarzo/tipos-piedra-cuarzo.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TiposCorteComponent } from './tipos-corte/tipos-corte.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:'pagina-principal', component:PaginaPrincipalComponent},
  {path:'sobre-nosotros', component:SobreNosotrosComponent},
  {path:'equipo-trabajo', component:EquipoTrabajoComponent},
  {path:'tecnologias', component:TecnologiasComponent},
  {path:'tipos-piedras', component:TiposPiedrasComponent},
  {path:'tipos-piedras-granito', component:TiposPiedrasGranitoComponent},
  {path:'tipos-piedras-cuarzo', component:TiposPiedraCuarzoComponent},
  {path:'contactanos', component:ContactanosComponent},
  {path:'tipos-corte', component:TiposCorteComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'**', pathMatch:'full', redirectTo:'pagina-principal'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
