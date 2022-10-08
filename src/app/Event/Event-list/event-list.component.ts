import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/services/event.service';
import { ToastrService } from 'src/services/toastr.service';


@Component({
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit{
  events! :any;
  constructor(private eventService : EventService, private toastr: ToastrService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: string){
    this.toastr.success(eventName);
  }

  }
