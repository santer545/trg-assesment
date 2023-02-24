import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocationListComponent } from './components/location-list/location-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { EditLocationComponent } from './components/edit-location/edit-location.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    LocationsComponent,
    LocationListComponent,
    AddLocationComponent,
    EditLocationComponent,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class LocationsModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
