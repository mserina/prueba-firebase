import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ServicioFireStoreService } from '../../servicios/servicio-fire-store.service';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/material/material.module';




@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  datos = inject(ServicioFireStoreService);
  articulos: any[] = [];

  ngOnInit(){
    this.datos.obtenerColeccion('articulos').subscribe(res => {
      this.articulos = res;
    })
  }
}
