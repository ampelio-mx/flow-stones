import { Component, OnInit } from '@angular/core';
import { ITiposPiedras } from '../../interfaces/tipos-piedras.interface';
import { TiposPiedraService } from '../../services/cards-tipos-piedra/tipos-piedra.service';

@Component({
  selector: 'app-tipos-piedras',
  templateUrl: './tipos-piedras.component.html',
  styleUrl: './tipos-piedras.component.scss'
})
export class TiposPiedrasComponent implements OnInit{

  interfazTiposPiedra: ITiposPiedras[];

  constructor(private servicioTiposPiedra: TiposPiedraService){
    this.interfazTiposPiedra = this.servicioTiposPiedra.listarTiposPiedra('Marmol');
  };

  ngOnInit(): void {

  }

}
