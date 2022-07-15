import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as imagenesActions from '../actions/imagencategoria.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { ImagenService } from '../../services/imagen.service';
import { of } from 'rxjs';


@Injectable()

export class ImagenCEffects {

    constructor(
        private actions$: Actions,
        private imagenService: ImagenService
    ){}
    cargarImagenC$ = createEffect(
        () => this.actions$.pipe(
            ofType( imagenesActions.cargarImagenC),
            mergeMap(
                ( action ) => this.imagenService.getImagenesByCategory( action.categoria )
                    .pipe(
                        map( img => imagenesActions.cargarImagenCSuccess({imagen: img }) ),
                        catchError( err => of(imagenesActions.cargarImagenCError({ payload: err })) )
                    )
            )
        )
    );

}
