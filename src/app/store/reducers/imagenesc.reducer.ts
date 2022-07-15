import { createReducer, on, Action } from '@ngrx/store';
import {cargarImagenC,cargarImagenCSuccess, cargarImagenCError} from '../actions/imagencategoria.actions';
import { Imagen } from '../../models/image.model';


export interface ImagenesCState {
    categoria: string,
    images  : Imagen[] ,
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const imagenesCInitialState: ImagenesCState = {
    categoria: '',
    images : [],
    loaded : false,
    loading: false,
    error  : null
}


const _imagenesCReducer = createReducer(imagenesCInitialState,

    on( cargarImagenC, (state, { categoria }) => ({ 
        ...state, 
        loading: true,
        categoria: categoria
    })),
    
    on( cargarImagenCSuccess, (state, { imagen }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        images: [...imagen ]
    })),

    on( cargarImagenCError, (state, { payload }) => ({ 
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

export function imagenesCReducer(state:any, action:Action) {
    return _imagenesCReducer(state, action);
}
