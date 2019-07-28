
# GalleryApplication

# Implementation
### Service layer:
Access/fetch the photos REST api (also provides pagination, configurable api), a Flicker Service implementing a Photo Service interface, if photos source is changed to for example google photos or imgur, we can have a specific implementation without having to change the entire application code.

Created 2 services implementations for ease of development, one to get pictures directly from flickr and other one with hardcoded lists of pictures, this can be switched from `app.module.ts`
```
providers: [{ provide: PHOTOS_SERVICE, useClass: FlickrService}],
//providers: [{ provide: PHOTOS_SERVICE, useClass: MockPhotosService}],
```
Environment configurations contains the flickr keys, where can be changed easily.

### Store
Uses ngrx to handle the store and actions. With redux tools can be seen how the data is flowing to the view and when the load action is triggered

### UI layer:
Exposes 2 components:
- photo tile: displays the single image with the tile and description
- photo layout: groups the tiles and provides the styling

### Containers:
2 components:
- Gallery view: will be responsible of orchestration, knows when to call the actions, and will render the UI layer components, contains the infinite scroll responsible of loading more photos on scroll and virtual scroll component to render N photos in the viewport without rendering the entire list to avoid performance issues
- App component: will render the gallery view

### Unit test
- Tested all the described functionality above running `npm run test`

# Runtime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Could be improved
- Unit tests for ngrx store implementation, effects, actions, state...
- Open large image and metadata using a route in modal
- Display a nice loader indicator, code already control when the gallery is loading or not more results
- Could have extended the photos-layout component in order to provided multiple types of layouts
- Handle http errors, in real scenario if http communication fail, have to display user friendly messages to users