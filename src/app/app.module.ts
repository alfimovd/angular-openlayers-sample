import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

// Import containers
import {
  HeaderLayout
} from './containers';

const APP_CONTAINERS = [
  HeaderLayout
]

@NgModule({
  declarations: [
    ...APP_CONTAINERS,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
