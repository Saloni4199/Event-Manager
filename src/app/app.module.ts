import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventAppComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventDetailComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  CollapsibleWellComponent,
  DurationPipe
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
   Error404Component,
   CreateSessionComponent,
   SessionListComponent,
   CollapsibleWellComponent,
   DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
