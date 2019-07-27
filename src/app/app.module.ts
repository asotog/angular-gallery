import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
