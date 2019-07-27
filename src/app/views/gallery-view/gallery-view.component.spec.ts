import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryViewComponent } from './gallery-view.component';
import { PhotosLayoutComponent } from 'src/app/components/photos-layout/photos-layout.component';
import { PhotoTileComponent } from 'src/app/components/photo-tile/photo-tile.component';
import { PHOTOS_SERVICE } from 'src/app/services/photos.service';
import { Photos } from 'src/app/services/photo';
import { of } from 'rxjs';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;
  let photosService: { fetch: jasmine.Spy };

  beforeEach(async(() => {
    photosService = jasmine.createSpyObj('PhotosService', ['fetch']);
    const result: Photos = {
      list: [],
      total: 0,
      page: 1
    };
    photosService.fetch.and.returnValue(of(result));
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent, PhotosLayoutComponent, PhotoTileComponent ],
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
});
