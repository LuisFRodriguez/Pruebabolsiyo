import { createReducer, on, Action } from '@ngrx/store';
import { cargarImagen, cargarImagenSuccess, cargarImagenError } from '../actions/imagen.actions';
import { Imagen } from '../../models/image.model';


export interface ImagenState {
    q: string,
    images: Imagen[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const ImagenInitialState: ImagenState = {
    q     : '',
    images : [],
    loaded : false,
    loading: false,
    error  : null
}


const _ImagenReducer = createReducer( ImagenInitialState,

    on( cargarImagen, (state, { q }) => ({ 
        ...state, 
        loading: true,
        q: q
    })),
    
    
    on( cargarImagenSuccess, (state, { imagen}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        images: [...imagen]
    })),

    on( cargarImagenError, (state, { payload }) => ({ 
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

export function ImagenReducer(state:any, action:Action) {
    return _ImagenReducer(state, action);
}