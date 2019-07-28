import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotosService } from './photos.service';
import { Photos } from './photo';
import { apiResponse } from 'src/assets/tests/services/scenarios-flickr';

const IMG_URL = ({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

@Injectable({
  providedIn: 'root'
})
export class MockPhotosService implements PhotosService {

  constructor() { }

  fetch(page: number, pageSize: number): Observable<Photos> {
    return of({
      list: apiResponse().photos.photo.map(photo => ({
          id: photo.id,
          title: photo.title,
          url: IMG_URL(photo),
          description: photo.description._content
        })),
      page: 1,
      total: apiResponse().photos.total,
    });
  }
}
