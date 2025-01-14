import { Routes } from '@angular/router';
import { ListadoComponent } from './articulos/listado/listado.component';
import { DetalleComponent } from './articulos/detalle/detalle.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path: "", component: ListadoComponent},
    {path: "detalle/:id", component: DetalleComponent},
    {path: "form", component: FormularioComponent}
];
