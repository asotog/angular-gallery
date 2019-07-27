import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlickrService } from './flickr.service';
import { FlickrSettings } from './flicker-settings';
import { MockPhotosServices } from './mock-photos.service';


@NgModule({
  declarations: [],
  providers: [FlickrService, FlickrSettings, MockPhotosServices],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
