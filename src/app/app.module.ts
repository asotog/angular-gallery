import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { FlickrService } from './services/flickr.service';
import { PHOTOS_SERVICE } from './services/photos.service';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';
import { MockPhotosService } from './services/mock-photos.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule
  ],
  // providers: [{ provide: PHOTOS_SERVICE, useClass: FlickrService}],
  providers: [{ provide: PHOTOS_SERVICE, useClass: MockPhotosService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
