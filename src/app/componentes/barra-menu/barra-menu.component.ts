import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrl: './barra-menu.component.scss'
})
export class BarraMenuComponent implements OnInit{

  @ViewChild('toggleItem', { static: true }) toggleItem!: ElementRef; // Referencia a la barra toggle
  @ViewChild('barraMenuItems', { static: true }) barraMenuItems!: ElementRef; // Referencia a la barra del menú

  ngOnInit(): void {
    this.setupToggle();
  }

  setupToggle(): void {
    const toggleElement = this.toggleItem.nativeElement;
    const menuElement = this.barraMenuItems.nativeElement;

    // Agregar el listener al elemento toggle
    toggleElement.addEventListener('click', () => {
      menuElement.classList.toggle('container-visible'); // Alternar la clase
    });
  }

}
