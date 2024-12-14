import { Component, OnInit} from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.scss'
})
export class PaginaPrincipalComponent implements OnInit{

  urlImagenProveedorCosentino: String = " ";
  urlImagenProveedorDekton: String = " ";
  urlImagenProveedorEverStone: String = " ";
  urlImagenProveedorMarBlock: String = " ";
  urlImagenProveedorMamex: String = " ";
  urlImagenProveedorMarmolesBh: String = " ";
  urlImagenProveedorMarmolesPuente: String = " ";
  urlImagenProveedorTnerife: String = " ";

  urlImagenCocinagaleriaUno: String = "";
  urlImagenCocinagaleriaDos: String = "";
  urlImagenCocinagaleriaTres: String = "";
  urlImagenCocinagaleriaCuatro: String = "";
  urlImagenCocinagaleriaCinco: String = "";
  urlImagenCocinagaleriaSeis: String = "";
  urlImagenCocinagaleriaSiete: String = "";

  ngOnInit(): void {

    this.urlImagenProveedorCosentino = '/assets/imagenes/cosentino.jfif';
    this.urlImagenProveedorDekton = '/assets/imagenes/dekton.jfif';
    this.urlImagenProveedorEverStone = '/assets/imagenes/everstone.jfif';
    this.urlImagenProveedorMarBlock = '/assets/imagenes/marblock.jfif';
    this.urlImagenProveedorMamex = '/assets/imagenes/marmex.jfif';
    this.urlImagenProveedorMarmolesBh = '/assets/imagenes/marmoles_bh.jfif';
    this.urlImagenProveedorMarmolesPuente = '/assets/imagenes/marmoles_puente.jfif';
    this.urlImagenProveedorTnerife = '/assets/imagenes/tnerife.jfif';

    this.urlImagenCocinagaleriaUno = '/assets/imagenes/cocina_galeria_1.jpg';
    this.urlImagenCocinagaleriaDos = '/assets/imagenes/cocina_galeria_2.jpg';
    this.urlImagenCocinagaleriaTres = '/assets/imagenes/cocina_galeria_3.jpg';
    this.urlImagenCocinagaleriaCuatro = '/assets/imagenes/cocina_galeria_4.jpg';
    this.urlImagenCocinagaleriaCinco = '/assets/imagenes/cocina_galeria_5.jpg';
    this.urlImagenCocinagaleriaSeis = '/assets/imagenes/cocina_galeria_6.jpg';
    this.urlImagenCocinagaleriaSiete = '/assets/imagenes/cocina_galeria_7.jpg';

    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }


}
