import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.scss'
})
export class ContactanosComponent{

  datosFormulario: FormGroup;
  archivoSeleccionado: File | null = null;

  constructor(){

    this.datosFormulario = new FormGroup(
      {
      nombreProspecto: new FormControl('', Validators.required),
      telefonoProspecto: new FormControl('', Validators.required),
      emailProspecto: new FormControl('', Validators.email),
      mensajeProspecto: new FormControl('', Validators.required)
      
    }
  )

  this.imprimirDatosFormulario();
  }
  
  imprimirDatosFormulario(){
    console.log(this.datosFormulario.value);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoSeleccionado = input.files[0];
      console.log('Archivo seleccionado:', this.archivoSeleccionado);
    }
  }

  enviarFormulario(form: HTMLFormElement){
    if(this.datosFormulario.valid)
    {
      const serviceID = 'service_v0w7ipd'; 
      const templateID = 'template_m9qmrro'; 
      const publicKey = 'M-jQbfBLgJ1sKTFtH'; 

      //crear constante emaildata

      const formData = new FormData();
      formData.append('nombreProspecto', this.datosFormulario.value.nombreProspecto);
      formData.append('telefonoProspecto', this.datosFormulario.value.telefonoProspecto);
      formData.append('emailProspecto', this.datosFormulario.value.emailProspecto);
      formData.append('mensajeProspecto', this.datosFormulario.value.mensajeProspecto);

      if (this.archivoSeleccionado) {
        formData.append('archivoProspecto', this.archivoSeleccionado);
      }


      emailjs.sendForm(serviceID, templateID, form, publicKey).then(
        (result) => {
          console.log('Correo enviado:', result.text);
          alert('Correo enviado con éxito!');
        },
        (error) => {
          console.error('Error al enviar correo:', error.text);
          alert('Error al enviar el correo.');
        }
      );
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
      
    }
  

}
