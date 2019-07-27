import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryViewComponent } from './views/gallery-view/gallery-view.component';


const routes: Routes = [
  { path: '', component: GalleryViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
