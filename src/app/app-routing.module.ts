import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './imagenes/lista/lista.component';


const routes: Routes = [


  {path:'Inicio', component:ListaComponent},
  {path:'**', redirectTo:'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
