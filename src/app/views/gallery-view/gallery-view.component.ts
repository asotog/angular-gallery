import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/services/photo';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.styl']
})
export class GalleryViewComponent implements OnInit {

  private photos: Photo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
