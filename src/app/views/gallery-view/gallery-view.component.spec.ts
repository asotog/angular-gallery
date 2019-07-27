import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryViewComponent } from './gallery-view.component';
import { PhotosLayoutComponent } from 'src/app/components/photos-layout/photos-layout.component';
import { PhotoTileComponent } from 'src/app/components/photo-tile/photo-tile.component';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent, PhotosLayoutComponent, PhotoTileComponent ]
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
