import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { galleryViewReducer } from './store/gallery-view.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { FlickrService } from './services/flickr.service';
import { PHOTOS_SERVICE } from './services/photos.service';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';
import { MockPhotosService } from './services/mock-photos.service';
import { environment } from 'src/environments/environment';
import { GalleryViewEffects } from './store/gallery-view.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    GalleryViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule,
    InfiniteScrollModule,
    StoreModule.forRoot({ galleryView: galleryViewReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([GalleryViewEffects])
  ],
  providers: [{ provide: PHOTOS_SERVICE, useClass: FlickrService}],
  // providers: [{ provide: PHOTOS_SERVICE, useClass: MockPhotosService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
