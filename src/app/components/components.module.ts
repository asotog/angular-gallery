import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoTileComponent } from './photo-tile/photo-tile.component';
import { PhotosLayoutComponent } from './photos-layout/photos-layout.component';



@NgModule({
  declarations: [PhotoTileComponent, PhotosLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [PhotosLayoutComponent, PhotoTileComponent]
})
export class ComponentsModule { }
