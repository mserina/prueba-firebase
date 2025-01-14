import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { Articulo } from '../modelos/articulo';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  articulo: Articulo = {nombre: '', categoria: '', Precio: 0};
}
