import { Component, OnInit, Inject } from '@angular/core';
import { Photo } from 'src/app/services/photo';
import { PHOTOS_SERVICE, PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.styl']
})
export class GalleryViewComponent implements OnInit {

  private photos: Photo[] = [];

  constructor(@Inject(PHOTOS_SERVICE) private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.fetch(1, 20).subscribe(photos => {
      this.photos = photos.list;
    });
  }

}
