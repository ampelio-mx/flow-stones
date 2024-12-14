import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ITiposPiedras } from '../../interfaces/tipos-piedras.interface';

@Component({
  selector: 'app-card-tipos-piedras',
  templateUrl: './card-tipos-piedras.component.html',
  styleUrl: './card-tipos-piedras.component.scss'
})
export class CardTiposPiedrasComponent {

  @Input() tiposPiedraInterfaz: ITiposPiedras;

  constructor(){
    this.tiposPiedraInterfaz={
      idTipoPiedra: '',
      nombreImagen: '',
      urlImagen: ''
    }
   
  }

}
