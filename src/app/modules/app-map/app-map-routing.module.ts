import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSampleComponent } from './pages/map-sample/map-sample.component';

const routes: Routes = [
  {
    path: '',
    component: MapSampleComponent,
    data: {
      title: 'Карта'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMapRoutingModule {}