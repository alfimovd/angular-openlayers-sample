import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

// Import Containers
import {
  HeaderLayout
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: HeaderLayout,
    loadChildren: './modules/app-map/app-map.module#AppMapModule'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}