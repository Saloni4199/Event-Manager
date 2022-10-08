import { Routes } from "@angular/router"
import { CreateEventComponent } from "./app/create-event/create-event.component"
import { Error404Component } from "./app/error/404.component"
import { EventDetailComponent } from "./app/event-detail/event-detail.component"
import { EventListComponent } from "./app/Event-list/event-list.component"

export const appRoutes:Routes = [
    { path: "events/new", component: CreateEventComponent},
    {path: "events", component: EventListComponent},
    { path: "events/:id", component: EventDetailComponent},
    {path: "404", component: Error404Component},
    { path:"" , redirectTo: "/events", pathMatch:"full"}

]