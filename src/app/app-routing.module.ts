import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./trg-map/trg-map.module').then((m) => m.TrgMapModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./trg-locations/locations.module').then((m) => m.LocationsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
