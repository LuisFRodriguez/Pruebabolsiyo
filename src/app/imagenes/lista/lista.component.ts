import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Imagen } from '../../models/image.model';
import { cargarImagenes } from '../../store/actions/imagenes.actions';
import { cargarImagenC } from '../../store/actions/imagencategoria.actions';
import { cargarImagen } from '../../store/actions/imagen.actions';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  imagenes: Imagen[] = [];
  loading: boolean = false;
  error: any;
  categoria: string = 'Selecciona Una Categoria';
  Fq: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('imagenes').subscribe( ({ images, loading, error }) => {
     
      this.imagenes = images;
      this.loading  = loading;
      this.error    = error;
    });


    this.store.dispatch( cargarImagenes() );
  }


  buscarCategoria(){
    this.store.select('imagenesc').subscribe( ({ images, loading, error }) => {
     
      this.imagenes = images;
      this.loading  = loading;
      this.error    = error;
  

      this.imagenes = [... this.imagenes];
    });

  
    this.store.dispatch(cargarImagenC({categoria:this.categoria}) );

  }


  buscarPorArgumento(){
    this.store.select('imagen').subscribe( ({ images, loading, error }) => {
      console.log('Data Imagen q',images);
      this.imagenes = images;
      this.loading  = loading;
      this.error    = error;
    });

      
      this.store.dispatch( cargarImagen({ q:this.Fq }) );

      this.Fq='';

  }

}
