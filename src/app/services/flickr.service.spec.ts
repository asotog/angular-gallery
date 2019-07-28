import { FlickrService } from './flickr.service';
import { apiResponse } from '../../assets/tests/services/scenarios-flickr';
import { asyncData } from '../../assets/tests/helpers';

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

  it('should return an Observable<Photos> and call the flickr api with proper URL', (done) => {
    const result = apiResponse();
    http.get.and.returnValue(asyncData(result));
    flickrService.fetch(1, 40).subscribe(photos => {
      expect(photos.page).toBe(1);
      expect(photos.total).toBe(10000);
      expect(photos.list.length).toBe(40);
      done();
    });
    expect(http.get).toHaveBeenCalledWith(`https://api.flickr.com/services/rest?extras=description&per_page=40&page=1` +
    `&method=flickr.interestingness.getList&api_key=123&format=json&nojsoncallback=1`);
  });
});
