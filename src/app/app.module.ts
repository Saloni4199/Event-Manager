import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAppComponent } from './Event-App/event-app.component';
import { EventListComponent } from './Event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/route';
import { CreateEventComponent } from './create-event/create-event.component';
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
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
