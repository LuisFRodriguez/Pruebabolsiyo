import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as imagenesActions from '../actions/imagenes.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { ImagenService } from '../../services/imagen.service';
import { of } from 'rxjs';



@Injectable()
export class ImagenesEffects {

    constructor(
        private actions$: Actions,
        private imagenService: ImagenService
    ){}
    cargarImagenes$ = createEffect(
        () => this.actions$.pipe(
            ofType( imagenesActions.cargarImagenes ),
            mergeMap(
                () => this.imagenService.getImagenes()
                    .pipe(
                        map( images => imagenesActions.cargarImagenesSuccess({ imagenes: images }) ),
                        catchError( err => of(imagenesActions.cargarImagenesError({ payload: err })) )
                    )
            )
        )
    );

}