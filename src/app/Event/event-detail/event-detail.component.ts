import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: IEvent | any;
  eventId: number;
  constructor(private eventService: EventService, private route:ActivatedRoute) { 
    this.eventId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(this.eventId);
  }

}
