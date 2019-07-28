import { Injectable, Inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PHOTOS_SERVICE, PhotosService } from 'src/app/services/photos.service';
import * as GalleryViewActions from './gallery-view.actions';

@Injectable()
export class GalleryViewEffects {

    loadPhotos$ = createEffect(() => this.actions$.pipe(
        ofType(GalleryViewActions.loadPhotos),
        mergeMap(({ page, pageSize}) => this.photosService.fetch(page, pageSize)
            .pipe(
                map(photos => GalleryViewActions.loadedPhotos({ photos })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        @Inject(PHOTOS_SERVICE) private photosService: PhotosService,
    ) { }
}
