import { createReducer, on } from '@ngrx/store';
import { loadPhotos, loadedPhotos } from './gallery-view.actions';
import { Photo, Photos } from 'src/app/services/photo';

export interface GalleryStatePagination {
    page: number;
    pageSize: number;
    total: number;
}

export interface GalleryState {
    photos: Photo[];
    isLoading: boolean;
    pagination: GalleryStatePagination;
}

export const initialState = (): GalleryState => ({
    photos: [],
    isLoading: false,
    pagination: {
        page: 0,
        pageSize: 40,
        total: 0
    }
});

export const galleryViewReducer = createReducer(initialState(),
    on(loadPhotos, (state, { page, pageSize }) => ({
        ...state,
        loading: true,
        pagination: {
            ...state.pagination,
            page,
            pageSize
        }
    })),
    on(loadedPhotos, (state, { photos }) => ({
        ...state,
        loading: false,
        photos: [ ...state.photos, ...photos.list],
        pagination: {
            ...state.pagination,
            total: photos.total
        }
    })),
  );
