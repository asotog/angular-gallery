import { Observable } from 'rxjs';
import { Photos } from './photo';

export interface PhotosService {
    fetch(page: number, pageSize: number): Observable<Photos>;
}

export const PHOTOS_SERVICE = 'PhotosService';
