import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { CreateEventComponent } from "src/app/create-event/create-event.component";
import { EventService } from "./event.service";

@Injectable({
    providedIn: 'root'
})
export class EventRouteGuard implements CanActivate, CanDeactivate<CreateEventComponent>{
    constructor(private eventService: EventService, private router: Router){

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