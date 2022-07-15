import { createReducer, on, Action } from '@ngrx/store';
import {cargarImagenes,cargarImagenesSuccess, cargarImagenesError} from '../actions';
import { Imagen } from '../../models/image.model';

export interface ImagenesState {
    images  : Imagen[],
    loaded : boolean,
    loading: boolean,
    error  : any
}


export const imagenesInitialState: ImagenesState = {
    images  : [],
    loaded : false,
    loading: false,
    error  : null
}

const _imagenesReducer = createReducer(imagenesInitialState,

    on( cargarImagenes, state => ({ ...state, loading: true })),
    
    
    on( cargarImagenesSuccess, (state, { imagenes }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        images: [ ...imagenes ] 
    })),

    on( cargarImagenesError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);

export function imagenesReducer(state:any, action:Action) {
    return _imagenesReducer(state, action);
}