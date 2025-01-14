import { Component, inject } from '@angular/core';
import { ServicioFireStoreService } from '../../servicios/servicio-fire-store.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  private datos = inject(ServicioFireStoreService);
  router = inject(ActivatedRoute);

  id: string  = '';
  articulo!: Articulo;

  ngOnInit(){
    this.id = this.router.snapshot.params["id"];
    console.log('El id es -> ', this.id);
    if (this.id){ 
      this.datos.obtenerDocumento(`articulos/${this.id}`).subscribe(respuesta => {
        
        this.articulo = respuesta;
      });
    }
  }
}
