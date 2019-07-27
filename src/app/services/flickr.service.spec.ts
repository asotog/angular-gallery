import { FlickrService } from './flickr.service';
import { defer } from 'rxjs';
import { apiResponse } from '../../assets/tests/services/scenarios-flickr';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('FlickrService', () => {
  let http: { get: jasmine.Spy };
  const flickerSettings = { flickrApiKey: '123' };
  let flickrService: FlickrService;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    flickrService = new FlickrService(<any> http, flickerSettings);
  });

  it('should be created', () => {
    expect(flickrService).toBeTruthy();
  });

  it('should return an Observable<Photos>', (done) => {
    const result = apiResponse();
    http.get.and.returnValue(asyncData(result));
    flickrService.fetch(1, 20).subscribe(photos => {
      expect(photos.page).toBe(1);
      expect(photos.total).toBe(500);
      expect(photos.list.length).toBe(20);
      done();
    });
    expect(http.get).toHaveBeenCalledWith(`https://api.flickr.com/services/rest
      ?extras=description&per_page=20&page=1&method=flickr.interestingness.getList
      &api_key=123&format=json&nojsoncallback=1`);
  });
});
