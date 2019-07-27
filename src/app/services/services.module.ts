import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlickrService } from './flickr.service';
import { FlickrSettings } from './flicker-settings';


@NgModule({
  declarations: [],
  providers: [FlickrService, FlickrSettings],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
