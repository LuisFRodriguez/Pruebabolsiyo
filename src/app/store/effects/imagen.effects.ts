
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as imagenesActions from '../actions/imagen.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { ImagenService } from '../../services/imagen.service';
import { of } from 'rxjs';


@Injectable()
export class ImagenEffects{
    constructor(
        private actions$: Actions,
        private imagenService: ImagenService
    ){}


    cargarImagen$ = createEffect(
        () => this.actions$.pipe(
            ofType( imagenesActions.cargarImagen ),
            mergeMap(
                ( action ) => this.imagenService.getImagenByQ( action.q )
                    .pipe(
                        map( img => imagenesActions.cargarImagenSuccess({ imagen: img }) ),
                        catchError( err => of(imagenesActions.cargarImagenError({ payload: err })) )
                    )
            )
        )
    );

}