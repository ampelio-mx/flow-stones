import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { CardsProductosComponent } from './cards-productos/cards-productos.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappIconoComponent } from './whatsapp-icono/whatsapp-icono.component';
import { CardTiposPiedrasComponent } from './card-tipos-piedras/card-tipos-piedras.component';


@NgModule({
  declarations: [
    BarraMenuComponent,
    CardsProductosComponent,
    FooterComponent,
    WhatsappIconoComponent,
    CardTiposPiedrasComponent
  ],
  exports:[
    BarraMenuComponent,
    FooterComponent,
    WhatsappIconoComponent,
    CardTiposPiedrasComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
