import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventAppComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  CreateEventComponent
} from './index'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/route';
import { Error404Component } from './error/404.component';



@NgModule({
  declarations: [
    EventAppComponent,
   EventListComponent,
   EventThumbnailComponent,
   NavBarComponent,
   EventDetailComponent,
   CreateEventComponent,
   Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
