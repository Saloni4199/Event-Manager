import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { map, Observable } from "rxjs";
import { CreateEventComponent } from "src/app/Event/create-event/create-event.component";
import { EventService } from "./event.service";

@Injectable({
    providedIn: 'root'
})
export class EventRouteGuard implements CanActivate, CanDeactivate<CreateEventComponent>, Resolve<any>{
    constructor(private eventService: EventService, private router: Router){

    }
    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
    canDeactivate(component: CreateEventComponent): boolean{
        if(component.isDirtyState)
            return window.confirm("you have not saved this event, do you really want to cancel?");
        return true;
    }
    canActivate(route: ActivatedRouteSnapshot):boolean{
        let eventExist = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExist)
            this.router.navigate(['/404'])
        return eventExist
    }

   
}