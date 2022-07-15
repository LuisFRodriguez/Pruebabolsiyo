import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
  
   imagenes: reducers.ImagenesState,
   imagenesc: reducers.ImagenesCState,
   imagen: reducers.ImagenState
}



export const appReducers: ActionReducerMap<AppState> = {

   imagenes: reducers.imagenesReducer,
   imagenesc: reducers.imagenesCReducer,
   imagen: reducers.ImagenReducer
}