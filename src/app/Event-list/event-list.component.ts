import { Component, OnInit} from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ToastrService } from 'src/services/toastr.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit{
  events! :any[];
  constructor(private eventService : EventService, private toastr: ToastrService){
  }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string){
    this.toastr.success(eventName);
  }

  }
