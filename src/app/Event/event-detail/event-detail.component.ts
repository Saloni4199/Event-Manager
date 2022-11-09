import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent | any;
  eventId: number;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventService, private route:ActivatedRoute) { 
    this.eventId = +this.route.snapshot.params['id'];
    this.addMode = false;
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(this.eventId);
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: any){
    const nextId = Math.max.apply(null, this.event.sessions.map((s:ISession) => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateSession(this.event);
    this.addMode = false;
  }
  cancelSession(){
    this.addMode = false;

  }
}
