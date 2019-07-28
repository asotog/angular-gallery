import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryViewComponent } from './gallery-view.component';
import { PhotosLayoutComponent } from 'src/app/components/photos-layout/photos-layout.component';
import { PhotoTileComponent } from 'src/app/components/photo-tile/photo-tile.component';
import { Photos } from 'src/app/services/photo';
import { of } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Store } from '@ngrx/store';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;
  let photosService: { fetch: jasmine.Spy };

  const result: Photos = {
    list: [],
    total: 10,
    page: 1
  };

  const storeMock = {
    select(...params) {
      if (
        params.includes('galleryView') &&
        params.includes('photos')
      ) {
        return of(result.list);
      } else if (
        params.includes('galleryView') &&
        params.includes('pagination') &&
        params.includes('total')
      ) {
        return of(result.total);
      } else if (
        params.includes('galleryView') &&
        params.includes('pagination') &&
        params.includes('page')
      ) {
        return of(result.page);
      } else {
        return of(false);
      }
    }
  };

  beforeEach(async(() => {
    photosService = jasmine.createSpyObj('PhotosService', ['fetch']);
    photosService.fetch.and.returnValue(of(result));
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent, PhotosLayoutComponent, PhotoTileComponent, InfiniteScrollDirective ],
      providers: [{ provide: Store, useValue: storeMock}]
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
    const galleryView: HTMLElement = fixture.nativeElement;
    const totalElement = galleryView.querySelector('[data-test="total-photos"]');
    expect(totalElement.textContent).toEqual('(10 results)');

  });
});
