import { Component } from '@angular/core';
import { ITiposPiedras } from '../../interfaces/tipos-piedras.interface';
import { TiposPiedraService } from '../../services/cards-tipos-piedra/tipos-piedra.service';

@Component({
  selector: 'app-tipos-piedra-cuarzo',
  templateUrl: './tipos-piedra-cuarzo.component.html',
  styleUrl: './tipos-piedra-cuarzo.component.scss'
})
export class TiposPiedraCuarzoComponent {
  
  interfazTiposPiedras: ITiposPiedras[];

  constructor(private servicioTiposPiedra: TiposPiedraService){    
    this.interfazTiposPiedras = this.servicioTiposPiedra.listarTiposPiedra('Cuarzo');
  };


}
