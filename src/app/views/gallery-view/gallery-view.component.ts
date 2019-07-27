import { Component, OnInit, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Photo } from 'src/app/services/photo';
import { PHOTOS_SERVICE, PhotosService } from 'src/app/services/photos.service';



@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.styl'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
    ])
  ]
})
export class GalleryViewComponent implements OnInit {

  private photos: Photo[] = [];
  private isLoading = false;
  private pagination = {
    page: 0,
    pageSize: 30,
    total: 0
  };

  constructor(@Inject(PHOTOS_SERVICE) private photosService: PhotosService) { }

  ngOnInit() {
    this.loadPhotos();
  }

  onScroll() {
    this.loadPhotos();
  }


  loadPhotos() {
    const { page, pageSize } = this.pagination;
    if (this.shouldLoadMore()) {
      this.pagination.page += 1;
      this.isLoading = true;
      this.photosService.fetch(page, pageSize).subscribe(photos => {
        this.photos = [...this.photos, ...photos.list];
        this.pagination.total = photos.total;
        this.isLoading = false;
      });
    }
  }

  shouldLoadMore() {
    const { page, total, pageSize } = this.pagination;
    const noResults = page !== 0 && total === 0;
    const hasNextPage = (page === 0 && total === 0) || (page + 1) <= Math.round(total / pageSize);
    return !this.isLoading && !noResults && hasNextPage;
  }

}
