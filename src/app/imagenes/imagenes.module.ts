import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListaComponent,
  
  ]
})
export class ImagenesModule { }
