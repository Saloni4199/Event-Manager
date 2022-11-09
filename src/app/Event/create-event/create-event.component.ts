import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles:[`
  em { 
    color: red; padding: 10px; float: right;
  }
  .error input { background-color: red}
  .error :: -webkit-input-placenolder { color: #999; }
  .error ::--moz-placeholder { color: #999; }
  .error :-moz-placeholder { color:#999; }
  .error :ms-input-placeholder { color: #999;}
  `]
})
export class CreateEventComponent implements OnInit {
  isDirtyState:boolean = true;
  newEvent: any;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/events']);
  }

  saveEvent(newEventForm: any){
    this.eventService.saveEvent(newEventForm);
    this.isDirtyState = false;
    this.router.navigate(['/events']);
  }
}
