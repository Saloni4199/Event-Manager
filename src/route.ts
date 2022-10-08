import { Routes } from "@angular/router"
import { CreateEventComponent } from "./app/Event/create-event/create-event.component"
import { Error404Component } from "./app/error/404.component"
import { EventDetailComponent } from "./app/Event/event-detail/event-detail.component"
import { EventListComponent } from "./app/Event/Event-list/event-list.component"
import { EventRouteGuard } from "./services/event-route-guard.service"

export const appRoutes:Routes = [
    { path: "events/new", component: CreateEventComponent, canDeactivate:[EventRouteGuard]},
    {path: "events", component: EventListComponent, resolve: {events: EventRouteGuard}},
    { path: "events/:id", component: EventDetailComponent, canActivate: [EventRouteGuard]},
    {path: "404", component: Error404Component},
    { path:"" , redirectTo: "/events", pathMatch:"full"},
    {path: 'user', loadChildren : () => import('./app/User/user.module').then(m=>m.UserModule) }

]