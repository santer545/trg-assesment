import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrgMapComponent } from './trg-map.component';

const routes: Routes = [
  {
    path: '',
    component: TrgMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrgMapRoutingModule {}
