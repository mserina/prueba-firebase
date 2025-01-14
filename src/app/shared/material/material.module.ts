import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

const material = [
  MatListModule
]

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
