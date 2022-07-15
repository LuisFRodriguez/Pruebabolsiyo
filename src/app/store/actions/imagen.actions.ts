import { createAction, props } from '@ngrx/store';
import { Imagen } from '../../models/image.model';

export const cargarImagen = createAction(
    '[Imagen] Cargar Imagen',
    props<{ q: string }>()
);

export const cargarImagenSuccess = createAction(
    '[Imagen] Cargar Imagen Success',
    props<{ imagen: Imagen[] }>()
);

export const cargarImagenError = createAction(
    '[Imagen] Cargar Imagen Error',
    props<{ payload: any }>()
);

