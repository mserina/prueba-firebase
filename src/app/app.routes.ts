import { Routes } from '@angular/router';
import { ListadoComponent } from './articulos/listado/listado.component';
import { DetalleComponent } from './articulos/detalle/detalle.component';

export const routes: Routes = [
    {path: "", component: ListadoComponent},
    {path: "detalle/:id", component: DetalleComponent}
];
