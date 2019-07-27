import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotosService } from './photos.service';
import { Photos } from './photo';
import { FlickrSettings } from './flicker-settings';

const FETCH_URL = (apiKey, page, pageSize) =>
  `https://api.flickr.com/services/rest?extras=description&per_page=${pageSize}&page=${page}` +
  `&method=flickr.interestingness.getList&api_key=${apiKey}&format=json&nojsoncallback=1`;

const IMG_URL = ({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

@Injectable({
  providedIn: 'root'
})
export class FlickrService implements PhotosService {

  constructor(private http: HttpClient, private flickerSettings: FlickrSettings) { }

  fetch(page: number, pageSize: number): Observable<Photos> {
    return this.http.get(FETCH_URL(this.flickerSettings.flickrApiKey, page, pageSize))
      .pipe(map((data: any) => ({
        list: data.photos.photo.map(photo => ({
          id: photo.id,
          title: photo.title,
          description: photo.description._content,
          url: IMG_URL(photo)
        })),
        page: data.photos.page,
        total: data.photos.total
      })));
  }
}
