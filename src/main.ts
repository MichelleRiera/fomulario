import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-nombre-componente',
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css']
})
export class NombreComponenteComponent {
  // Propiedades del componente
  title = 'Mi componente';
  message = 'Este es mi mensaje personalizado';
  
  // Métodos del componente
  onButtonClick() {
    console.log('El botón ha sido presionado');
  }
}

