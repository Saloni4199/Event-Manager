import { Routes } from "@angular/router"
import { Error404Component } from "./app/error/404.component"
import { EventRouteGuard } from "./services/event-route-guard.service"
import { CreateSessionComponent,
        EventListComponent,
        EventDetailComponent,
        CreateEventComponent
 } from "./app/Event/index"


export const appRoutes:Routes = [
    { path: "events/new", component: CreateEventComponent, canDeactivate:[EventRouteGuard]},
    {path: "events", component: EventListComponent, resolve: {events: EventRouteGuard}},
    { path: "events/:id", component: EventDetailComponent, canActivate: [EventRouteGuard]},
    { path: "events/session/new", component: CreateSessionComponent},
    {path: "404", component: Error404Component},
    { path:"" , redirectTo: "/events", pathMatch:"full"},
    {path: 'user', loadChildren : () => import('./app/User/user.module').then(m=>m.UserModule) }

]