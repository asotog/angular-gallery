import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTileComponent } from './photo-tile.component';

describe('PhotoTileComponent', () => {
  let component: PhotoTileComponent;
  let fixture: ComponentFixture<PhotoTileComponent>;
  const photoMock = { id: '12345', title: 'Image Title', url: 'http://anydomain.com/image.jpg'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTileComponent);
    component = fixture.componentInstance;
    component.photo = photoMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render properly title and image', () => {
    const photoTileElement: HTMLElement = fixture.nativeElement;
    const title = photoTileElement.querySelector('[data-test="photo-title"]');
    const image = photoTileElement.querySelector('[data-test="photo-img"]');
    expect(title.textContent).toEqual(photoMock.title);
    expect(image.getAttribute('src')).toEqual(photoMock.url);
  });
});