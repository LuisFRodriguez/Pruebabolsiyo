import { createAction, props } from '@ngrx/store';
import { Imagen } from '../../models/image.model';

export const cargarImagenes = createAction('[Imagenes] Cargar Imagenes');

export const cargarImagenesSuccess = createAction(
    '[Imagenes] Cargar Imagenes Success',
    props<{ imagenes: Imagen[] }>()
);

export const cargarImagenesError = createAction(
    '[Imagenes] Cargar Imagenes Error',
    props<{ payload: any }>()
);

