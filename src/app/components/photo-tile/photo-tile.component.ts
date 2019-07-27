import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/services/photo';

@Component({
  selector: 'app-photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.styl']
})
export class PhotoTileComponent {

  @Input() photo: Photo;

}
