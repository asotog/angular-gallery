import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/services/photo';

@Component({
  selector: 'app-photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.styl']
})
export class PhotoTileComponent {

  @Input() photo: Photo;

  truncatedDescription() {
    const MAX = 150;
    const { description } = this.photo;
    const stripped = this.stripHtml(description);
    return stripped.length > MAX ? `${stripped.substr(0, 150)}...` : stripped;
  }

  stripHtml(html: string) {
    const temporalDivElement = document.createElement('div');
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || '';
  }
}
