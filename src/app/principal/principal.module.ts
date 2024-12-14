import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { EquipoTrabajoComponent } from './equipo-trabajo/equipo-trabajo.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { TiposPiedrasComponent } from './tipos-piedras/tipos-piedras.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TiposCorteComponent } from './tipos-corte/tipos-corte.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TiposPiedrasGranitoComponent } from './tipos-piedras-granito/tipos-piedras-granito.component';
import { TiposPiedraCuarzoComponent } from './tipos-piedra-cuarzo/tipos-piedra-cuarzo.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    SobreNosotrosComponent,
    EquipoTrabajoComponent,
    TecnologiasComponent,
    TiposPiedrasComponent,
    ContactanosComponent,
    TiposCorteComponent,
    ServiciosComponent,
    TiposPiedrasGranitoComponent,
    TiposPiedraCuarzoComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ComponentesModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
