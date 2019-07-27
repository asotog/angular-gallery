import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTileComponent } from './photo-tile.component';

describe('PhotoTileComponent', () => {
  let component: PhotoTileComponent;
  let fixture: ComponentFixture<PhotoTileComponent>;
  const photoMock = { id: '12345', title: 'Image Title', url: 'http://anydomain.com/image.jpg', description: 'My image description'};

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
    const photoTileWrapper = photoTileElement.querySelector('[data-test="photo-tile"]');
    const title = photoTileElement.querySelector('[data-test="photo-title"]');
    expect(title.textContent).toEqual(photoMock.title);
    expect(photoTileWrapper.getAttribute('style')).toEqual(`background-image: url("${photoMock.url}");`);
  });

  it('should truncate large description', () => {
    const largeDescription = 'bigtext'.repeat(100);
    component.photo.description = largeDescription;
    expect(component.truncatedDescription()).not.toEqual(largeDescription);
  });

  it('should strip html tags in description', () => {
    const description = '<p>hello</p>';
    component.photo.description = description;
    expect(component.truncatedDescription()).toEqual('hello');
  });
});
