import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Articulo } from '../modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class ServicioFireStoreService {

  private db = inject(Firestore);
  constructor() { }

 obtenerColeccion(path:string) : Observable<Articulo[]>{
  const refCol = collection(this.db, path);
  return collectionData(refCol, {idField: 'id'}) as Observable<Articulo[]>;
 }

 obtenerDocumento(path:string) : Observable<Articulo>{
  const refDoc = doc(this.db, path);
  return docData(refDoc) as Observable<Articulo>;
 }
}
