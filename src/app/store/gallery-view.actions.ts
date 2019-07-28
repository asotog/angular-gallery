import { createAction, props } from '@ngrx/store';
import { Photos } from '../services/photo';

export const loadPhotos = createAction(
  '[Gallery View] Load photos',
  props<{ page: number; pageSize: number }>()
);

export const loadedPhotos = createAction(
    '[Gallery View] Photos loaded',
    props<{ photos: Photos }>()
  );
