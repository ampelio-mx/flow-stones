import { Component, OnInit } from '@angular/core';
import { ITiposPiedras } from '../../interfaces/tipos-piedras.interface';
import { TiposPiedraService } from '../../services/cards-tipos-piedra/tipos-piedra.service';

@Component({
  selector: 'app-tipos-piedras-granito',
  templateUrl: './tipos-piedras-granito.component.html',
  styleUrl: './tipos-piedras-granito.component.scss'
})
export class TiposPiedrasGranitoComponent {

  interfazTiposPiedras: ITiposPiedras[];

  constructor(private servicioTiposPiedra: TiposPiedraService){    
    this.interfazTiposPiedras = this.servicioTiposPiedra.listarTiposPiedra('Granito');
  };


}