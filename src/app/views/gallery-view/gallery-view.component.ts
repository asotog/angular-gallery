import { Component, OnInit, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { Photo } from 'src/app/services/photo';
import { PHOTOS_SERVICE, PhotosService } from 'src/app/services/photos.service';
import { GalleryState } from 'src/app/store/gallery-view.reducer';
import { loadPhotos } from 'src/app/store/gallery-view.actions';
import { Observable } from 'rxjs';

const PAGE_SIZE = 40;

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.styl'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(400)
      ]),
    ])
  ]
})
export class GalleryViewComponent implements OnInit {

  photos$: Observable<Photo[]>;
  isLoading = false;
  page = 0;
  total = 0;

  constructor(private store: Store<{ galleryView: GalleryState }>) {
    this.photos$ = store.select('galleryView', 'photos');
    store.select('galleryView', 'pagination', 'total').subscribe(total => this.total = total);
    store.select('galleryView', 'pagination', 'page').subscribe(page => this.page = page);
    store.select('gallery', 'isLoading').subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnInit() {
    this.loadPhotos();
  }

  onScroll() {
    this.loadPhotos();
  }

  loadPhotos() {
    if (this.shouldLoadMore()) {
      const { page } = this;
      this.store.dispatch(loadPhotos({ page: page + 1, pageSize: PAGE_SIZE }));
    }
  }

  shouldLoadMore() {
    const { page, total } = this;
    const noResults = page !== 0 && total === 0;
    const hasNextPage = (page === 0 && total === 0) || (page + 1) <= Math.round(total / PAGE_SIZE);
    return !this.isLoading && !noResults && hasNextPage;
  }

}
