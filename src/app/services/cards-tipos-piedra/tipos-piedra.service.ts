import { Injectable } from '@angular/core';
import { ITiposPiedras } from '../../interfaces/tipos-piedras.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposPiedraService {

  valoresTiposPiedras: ITiposPiedras[];
  
  constructor() {
    this.valoresTiposPiedras= [
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Marmol',
        nombreImagen: 'Marmol blanco',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      ,
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_negro.png'
      },
      {
        idTipoPiedra: 'Granito',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Cuarzo',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      },
      {
        idTipoPiedra: 'Cuarzo',
        nombreImagen: 'Granito',
        urlImagen: '/assets/imagenes-piedras/marmol_blanco.jpg'
      }
      
    ]
   }

   listarTiposPiedra(tipoPiedra: string):ITiposPiedras[]{
    return this.valoresTiposPiedras.filter(tipodePiedra => tipodePiedra.idTipoPiedra === tipoPiedra);
   }
}
