import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryViewComponent } from './gallery-view.component';
import { PhotosLayoutComponent } from 'src/app/components/photos-layout/photos-layout.component';
import { PhotoTileComponent } from 'src/app/components/photo-tile/photo-tile.component';
import { PHOTOS_SERVICE } from 'src/app/services/photos.service';
import { Photos } from 'src/app/services/photo';
import { of } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;
  let photosService: { fetch: jasmine.Spy };
  const result: Photos = {
    list: [],
    total: 10,
    page: 1
  };

  beforeEach(async(() => {
    photosService = jasmine.createSpyObj('PhotosService', ['fetch']);
    photosService.fetch.and.returnValue(of(result));
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent, PhotosLayoutComponent, PhotoTileComponent, InfiniteScrollDirective ],
      providers: [{ provide: PHOTOS_SERVICE, useValue: photosService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display total items available in the data source', () => {
    photosService.fetch.and.returnValue(of({
      ...result,
      total: 150
    }));
    fixture = TestBed.createComponent(GalleryViewComponent);
    fixture.detectChanges();

    const galleryView: HTMLElement = fixture.nativeElement;
    const totalElement = galleryView.querySelector('[data-test="total-photos"]');
    expect(totalElement.textContent).toEqual('(150 results)');

  });
});
