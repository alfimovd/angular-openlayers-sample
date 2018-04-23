import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSampleComponent } from './pages/map-sample/map-sample.component';
import { AppMapRoutingModule } from './app-map-routing.module';
import { AdMapModule } from '../ad-map/ad-map.module';

@NgModule({
  imports: [
    CommonModule,
    AppMapRoutingModule,
    AdMapModule
  ],
  declarations: [MapSampleComponent]
})

export class AppMapModule { }
