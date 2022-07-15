import { createAction, props } from '@ngrx/store';
import { Imagen } from '../../models/image.model';

export const cargarImagenC = createAction(
    '[ImagenC] Cargar Imagen C',
    props<{ categoria: string }>()
);

export const cargarImagenCSuccess = createAction(
    '[ImagenC] Cargar Imagen C Success',
    props<{ imagen: Imagen[] }>()
);

export const cargarImagenCError = createAction(
    '[ImagenC] Cargar Imagen C Error',
    props<{ payload: any }>()
);